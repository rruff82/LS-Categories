import numpy as np
import networkx as nx

EMPTY_GRAPH = nx.DiGraph()
NAKED_DOT = nx.DiGraph({"d":[]})
NAKED_ARROW = nx.DiGraph({"s":["t"]})


def follow_endomap(G,n):
    try:
        return list(G.successors(n))[0]
    except IndexError:
        return n

def graph_sum(A,B,make_injections=False):
    MA,MB = nx.to_numpy_array(A),nx.to_numpy_array(B)
    MA_pad = np.pad(MA,(0,MB.shape[0]))
    MB_pad = np.pad(MB,(MA.shape[0],0))
    output = nx.from_numpy_array(MA_pad+MB_pad,create_using=nx.DiGraph)
    if make_injections:
        jMA = np.hstack([np.eye(MA.shape[0]),np.full((MB.shape[0],MA.shape[1]),0)])
        jMB = np.hstack([np.full((MA.shape[0],MB.shape[1]),0),np.eye(MB.shape[0])])
        j1 = {
            "domain":A,
            "codomain":output,
            "map":jMA
        }
        j2 = {
            "domain":B,
            "codomain":output,
            "map":jMB
        }
        return output,j1,j2
    return output

def graph_product(A,B,make_projections=False):
    # for our product, the nodes are pairs of nodes
    a_size,b_size = len(A.nodes),len(B.nodes)
    new_size = a_size*b_size
    print(f"Nodes = {a_size} x {b_size} -> {new_size}")
    p_nodes = [str([a,b]) for a in A.nodes for b in B.nodes]
    print(p_nodes,len(p_nodes))
    p_edges = [(str([a[0],b[0]]),str([a[1],b[1]])) for a in A.edges for b in B.edges]
    print(p_edges,len(p_edges))
    output = nx.DiGraph()
    output.add_nodes_from(p_nodes)
    output.add_edges_from(p_edges)
    if make_projections:
        pMA = np.hstack([np.eye(a_size)] * b_size)
        pMB = np.hstack([np.eye(b_size)] * a_size)
        p1 = {
            "domain":output,
            "codomain":A,
            "map":pMA
        }
        p2 = {
            "domain":output,
            "codomain":B,
            "map":pMB
        }
        return output,p1,p2
        
    return output

def graph_isometry(GA,GB):
    print(f"Testing for isometry of {GA} {GB}")
    MA,MB = nx.to_numpy_array(GA),nx.to_numpy_array(GB)
    
    if MA.shape != MB.shape:
        # different numbers of dots
        print(f"Not isometric: different numbers of dots")
        return False
    
    size = MA.shape[0]
    
    if np.allclose(MA,MB):
        # exact same graph
        print(f"Isometric: same adjacency matrix")
        return True
    
    MA_flat = np.reshape(MA,(size*size,))
    MB_flat = np.reshape(MB,(size*size,))
    
    MA_ac = np.sum(MA_flat)
    MB_ac = np.sum(MB_flat)
    print(f"Arrow counts: {MA_ac} {MB_ac}")
    if not np.equal(MA_ac,MB_ac):
        # different arrow counts
        print(f"Not isometric: different arrow counts")
        return True
    
    
    eigvals_A,eigvecs_A = np.linalg.eig(MA)
    eigvals_B,eigvecs_B = np.linalg.eig(MB)
    
    
    
    if not np.allclose(eigvals_A,eigvals_B):
        # different singular values
        print(f"Not isometric: different eigen values")
        return False


    test_A = eigvecs_A @ np.diag(eigvals_A) @ eigvecs_A.conj().T
    print(test_A)
    assert np.allclose(test_A,MA)
    
    print("Isometric: all tests pass")
    
    print(eigvals_A,eigvecs_A)
    
    print(eigvals_B,eigvecs_B)
    
    p1 = eigvecs_B @ eigvecs_A.T 
    p2 = eigvecs_A @ eigvecs_B.T 

    
    print(p1,p2)
    
    print(p1@MA)
    print(p2@MB)
    
    return True
    

def make_A_N(n):
    output = nx.DiGraph()
    output.add_nodes_from(range(n+1))
    output.add_edges_from([(i,i+1) for i in range(n)])
    return output

def make_C_N(n):
    XG = nx.DiGraph()
    XG.add_nodes_from(range(n))
    XG.add_edges_from([(i,(i+1)%n) for i in range(n)])
    return XG

def find_graph_powers(G):
    return [power_of_graph(G,i) for i in range(len(G.nodes)*2)]

def find_graph_images(G):
    return [find_graph_image(x) for x in find_graph_powers(G)]

def find_graph_relation(G):
    images = find_graph_images(G)
    num_imgs = len(images)
    for i in range(num_imgs):
        for j in range(i):
            if graph_isometry(images[i],images[j]):
                return (i,j)

def enumerate_maps_to_dot(G):
    return [
        {n:"d"} for n in G.nodes
    ]


def enumerate_maps_to_arrow(G):
    G_size = len(G.nodes)
    A_count = 2**G_size
    return [
        {
            n:(
                "t" if check_bit(i,j) else "s"
            ) for j,n in enumerate(G.nodes)
        } for i in range(A_count)
    ]

def split_s_t(G):
    X_S,X_T = [],[]
    for i,n in enumerate(G.nodes):
        if len(G.pred[n].items())>0:
            X_T.append(n)
        if len(G.succ[n].items())>0:
            X_S.append(n)
    return X_S,X_T

def split_s_t_b(G):
    n_S,n_T = split_s_t(G)
    X_S = list(set(G.nodes)-set(n_T))
    X_T = list(set(G.nodes)-set(n_S))
    X_B = list(set(G.nodes)-set(X_S)-set(X_T))
    return X_S,X_T,X_B

def has_map_to_C2(G):
    M = nx.to_numpy_array(G)
    dM = np.diag(M)
    if np.count_nonzero(dM)>0:
        print("found map to fixed point")
        return False
    else:
        G_S,G_T,G_B = split_s_t_b(G)
        print(G_S,G_T,G_B)
        if len(G_S)==len(G_T) and len(G_B)%2 == 0:
            # TODO: might be more to check here
            print("maybe splittable")
            return True
        else:
            print("not splittable")
            return False


    