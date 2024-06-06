import numpy as np
import networkx as nx
import matplotlib.pyplot as plt
import scipy

def make_one_hot(idx,size):
  return np.array([1 if idx == x else 0 for x in range(size)])

def follow_endomap(G,n):
  return list(G.successors(n))[0]

def follow_endomap(G,n):
  return list(G.successors(n))[0]

def print_map_info(endomap):
  for idx,v in enumerate(endomap["relations"]):
    print(f"Relation {idx} {v}")
    if v[0][0] == v[1][0]:
      cl = abs(v[0][1] - v[1][1])
      mins = min(v[0][1],v[1][1])
      print(f"{v[0][0]} leads to cycle of length {cl} after {mins} steps")
    else:
      if v[0][1] > v[1][1]:
          stdf = v[0][1] - v[1][1]
          print(f"{v[1][0]} leads to {v[0][0]} after {stdf} steps")
      else:
          stdf = v[1][1] - v[0][1]
          print(f"{v[0][0]} leads to {v[1][0]} after {stdf} steps")

def get_cycles(endomap):
  cycles_by_length = {}
  cycles_by_generator = {}
  for k,v in enumerate(endomap["relations"]):
    if v[0][0] == v[1][0]:
      cl = abs(v[0][1] - v[1][1])
      mins = min(v[0][1],v[1][1])
      print(f"{v[0][0]} leads to cycle of length {cl} after {mins} steps")
      if not cl in cycles_by_length:
        cycles_by_length[cl] = {
            "primary_generators":[k],
            "secondary_generators":[]
        }
      else:
        cycles_by_length[cl]['primary_generators'].append(k)
      cycles_by_generator[v[0][0]] = cl
    else:
      cl = cycles_by_generator[v[1][0]]
      cycles_by_length[cl]['secondary_generators'].append(k)
      cycles_by_generator[v[0][0]] = cl
  return {
      "cycles_by_length":cycles_by_length, 
      "cycles_by_generator":cycles_by_generator
  }

def iterate_endomap(endomap, start, steps):
  out_val = start
  for i in range(steps):
    out_val = follow_endomap(endomap,out_val)
  return out_val

def make_assignments(gen,poss_vals):
  output = []
  for v in poss_vals:
    output.append({gen:v})
  return output

def join_assignments(ass1,ass2):
  if len(ass2)<len(ass1):
    return join_assignments(ass2,ass1)
  if len(ass1) == 0:
    return ass2

  output = []
  for a1 in ass1:
    for a2 in ass2:
      new_a1 = a1.copy()
      for k,v in zip(a2.keys(),a2.values()):
        new_a1[k] = v
      output.append(new_a1)
  return output

def find_predecessors(endomap,target,steps=1):
  preds = list(endomap.predecessors(target))
  if steps > 1 and len(preds) > 0:
    r_preds = []
    for t in preds:
      r_preds.extend(find_predecessors(endomap,t,steps-1))
    return r_preds
  else:
    return preds

def make_all_maps(xs,ys):
    x_size = len(xs)
    y_size = len(ys)
    total = y_size**x_size
    all_assignments = []
    for x in xs:
        new_maps = []
        for y in ys:
            new_maps.append({x:y})
        all_assignments = join_assignments(all_assignments,new_maps) 
    return all_assignments

def preserves_structure(f,x_graph,y_graph):
    for k,v in zip(f.keys(),f.values()):
        alpha_x = follow_endomap(x_graph,k)
        f_alpha_x = f[alpha_x]
        beta_y = follow_endomap(y_graph,v)
        if beta_y != f_alpha_x:
              return False
    return True

def make_presentation(G):
  G_nodes = list(G.nodes())
  ones_G = np.full((len(G_nodes),),1)
  GA =  nx.adjacency_matrix(G)
  G_arrows_in =  np.matmul(ones_G,GA.toarray())
  G_arrows_by_node = sorted(zip(range(len(G_nodes)),G_arrows_in), key=lambda x: x[1])
  G_presentation = {}
  G_relations = {}
  for k,v in G_arrows_by_node:
    if v == 0:
      G_presentation[G_nodes[k]] = (G_nodes[k],v)
      next_node = follow_endomap(G,G_nodes[k])
      steps = 1
      while not next_node in G_presentation:
        G_presentation[next_node] = (G_nodes[k],steps)
        next_node = follow_endomap(G,next_node)
        steps += 1
      G_relations[G_nodes[k]] = ((G_nodes[k],steps),G_presentation[next_node])
    elif v == 1:
      if not G_nodes[k] in G_presentation:
        G_presentation[G_nodes[k]] = (G_nodes[k],0)
        next_node = follow_endomap(G,G_nodes[k])
        steps = 1
        while not next_node in G_presentation:
          G_presentation[next_node] = (G_nodes[k],steps)
          next_node = follow_endomap(G,next_node)
          steps += 1
        G_relations[G_nodes[k]] = ((G_nodes[k],steps),G_presentation[next_node])
    
  return {
      "generators":list(G_relations.keys()),
      "relations":list(G_relations.values())
  }

def zig_zag(n):
    last = (0,0)
    idx = 0
    while idx < n:
        yield last
        idx += 1
        if last[1] == 0:
            last = (0,last[0]+1)
        else:
            last = (last[0]+1,last[1]-1)

def triangular(n):
    return int((n+1)*n/2)

def reverse_zig_zag(p):
    my_sum = p[0]+p[1]
    my_triangle = triangular(my_sum)
    return my_triangle+p[0]


def standardize_presentation(endomap):
    generator_map = {}
    reverse_generator_map = {}
    for idx,gen in enumerate(endomap['generators']):
        generator_map[idx] = gen
        reverse_generator_map[gen] = idx
    max_steps = 0
    relation_map = {}
    relation_pairs = {}
    max_depth = 0
    for rel in endomap['relations']:
        #print(f"Relation: {rel}")
        left_gen = reverse_generator_map[rel[0][0]]
        right_gen = reverse_generator_map[rel[1][0]]
        left_idx = reverse_zig_zag((left_gen,rel[0][1]))
        right_idx = reverse_zig_zag((right_gen,rel[1][1]))
        
        #print(f"L:{left_idx}, R:{right_idx}")
        my_min = min(left_idx,right_idx)
        my_max = max(left_idx,right_idx)
        if my_max > max_steps:
            max_steps = my_max
        relation_map[my_max] = my_min
        relation_pairs[left_idx] = rel[0]
        relation_pairs[right_idx] = rel[1]
        max_depth = max(max(rel[0][1],rel[1][1]),max_depth)
        
    return {
        "generator_count":len(endomap['generators']),
        "generators":endomap['generators'],
        "substitutions":relation_map,
        "relation_pairs":relation_pairs,
        "max_depth":max_depth,
        "max_steps":max_steps
    }
        
def max_relation_steps(endomap):
    output = 0
    for r in endomap['relations']:
        output = max(output,max(r[0][1],r[1][1]))
    return output

def standard_iterator(g,n):
    return "s"*n+g

def reconstruct_endomap(endomap):
    index_by_label = {}
    labels_by_index = {}
    my_map = {}
    #print(f"Attempting to enumerate points of {endomap}")
    my_pres = standardize_presentation(endomap)
    #print(f"Standardized presentation: {my_pres}")
    num_gens = len(endomap['generators'])
    max_steps = max_relation_steps(endomap)
    max_enum = reverse_zig_zag((num_gens,max_steps))
    #print(f"In order to get {max_steps} out of each generator, we need {max_enum} of zig zag")
    
    # make a map of known substitutions
    sub_map = {}
    for k,v in zip(my_pres['substitutions'].keys(),my_pres['substitutions'].values()):
        key_pair = my_pres['relation_pairs'][k]
        value_pair = my_pres['relation_pairs'][v]
        key_name = standard_iterator(key_pair[0],key_pair[1])
        value_name = standard_iterator(value_pair[0],value_pair[1])
        sub_map[key_name] = value_name
        
    #print(f"Sub Map: {sub_map}")
    for g_n in range(num_gens):
        #print(f"GENERATOR: {g_n}={endomap['generators'][g_n]}")
        a_n = 0
        my_pair = (g_n,a_n)
        my_zz_idx = reverse_zig_zag(my_pair)
        my_name = standard_iterator(endomap['generators'][g_n],a_n)
        #print(f"{my_pair} >> {my_zz_idx} = {my_name}")
        index_by_label[my_name] = my_zz_idx
        labels_by_index[my_zz_idx] = my_name
        
        while my_name not in my_map:
            a_n += 1
            #print(f"\tSTEP {a_n}") 
            my_pair = (g_n,a_n)
            my_zz_idx = reverse_zig_zag(my_pair)
            new_name = standard_iterator(endomap['generators'][g_n],a_n)
            #print(f"{my_pair} >> {my_zz_idx} = {new_name}")
            if new_name in sub_map:
                #print(f"\tFound sub for {new_name}!")
                new_name = sub_map[new_name]
                if new_name in index_by_label:
                    my_zz_idx = index_by_label[new_name]
            my_map[my_name] = new_name
            my_name = new_name
            index_by_label[my_name] = my_zz_idx
            labels_by_index[my_zz_idx] = my_name
            
    my_map_by_index = {index_by_label[k]:index_by_label[v] for k,v in zip(my_map.keys(),my_map.values())}        
    return {
        "map_by_name":my_map,
        "map_by_zz_index":my_map_by_index,
        "index_by_label":index_by_label,
        "label_by_index":labels_by_index,
        "size":len(my_map)
    }

# okay! now we can reconstruct the endomap from a presentation!
# now lets try decomposing each endomap into standardized "clusters"
def decompose_endomap(endomap):
    #print(f"Attempting to decompose {endomap}")
    my_pres = standardize_presentation(endomap)
    #print(f"Standardized presentation: {my_pres}")
    num_gens = len(endomap['generators'])
    max_steps = max_relation_steps(endomap)
    
    # go through our "substitutions" and collect cluster info
    clusters_by_generator = {}
    generators_by_cluster = {}
    for k in sorted(my_pres['substitutions'].keys()):
        v = my_pres['substitutions'][k]
        k_pair = my_pres['relation_pairs'][k]
        v_pair = my_pres['relation_pairs'][v]
        #print(f"{k_pair} {v_pair}")
        if k_pair[0] in clusters_by_generator:
            #print("left element already has a cluster")
            cluster_index = clusters_by_generator[k_pair[0]]
            if v_pair[0] not in generators_by_cluster[cluster_index]:
                generators_by_cluster[cluster_index].add(v_pair[0])
        elif v_pair[0] in clusters_by_generator:
            #print("right element already has a cluster")
            cluster_index = clusters_by_generator[v_pair[0]]
            if k_pair[0] not in generators_by_cluster[cluster_index]:
                generators_by_cluster[cluster_index].add(k_pair[0])
        else:
            cluster_index = len(generators_by_cluster)
            generators_by_cluster[cluster_index] = set([k_pair[0],v_pair[0]])
            clusters_by_generator[k_pair[0]] = cluster_index
            if v_pair[0] != k_pair[0]:
                clusters_by_generator[v_pair[0]] = cluster_index
    
    # having both of these maps, sort our relations into appropriate clusters
    clusters = []
    for value_set in generators_by_cluster.values():
        new_cluster = {
            'generators':list(value_set),
            'relations':list(filter(lambda x: x[0][0] in value_set,endomap['relations']))
        }
        clusters.append(new_cluster)
    return clusters

def get_loop_size(cluster):
    for rel in cluster['relations']:
        if rel[0][0] == rel[1][0]:
            return max(rel[0][1],rel[1][1])-min(rel[0][1],rel[1][1])
    return None

def find_all_cluster_pairs(endo_A,endo_B):
    # only clusters with the same cycle length could possibly match up
    clusters_A = decompose_endomap(endo_A)
    clusters_B = decompose_endomap(endo_B)
    pairs = []
    for cA in clusters_A:
        loopA = get_loop_size(cA)
        for cB in clusters_B:
            loopB = get_loop_size(cB)
            if loopA == loopB:
                #print(f"Potential for maps between {cA} and {cB}")
                pairs.append((cA,cB,loopA))
    return pairs

def make_assignment_generator(gen,poss_vals):
  for v in poss_vals:
    yield {gen:v}

def make_map_by_assignment_vector(setA,setB,assignments):
    return {setA[i]:setB[assignments[i]] for i in range(len(setA))}

def get_session15_endomaps():
    x_nodes = ["X"+str(i) for i in range(9)]
    x_edges = [
        (x_nodes[0],x_nodes[4]),
        (x_nodes[1],x_nodes[5]),
        (x_nodes[2],x_nodes[6]),
        (x_nodes[3],x_nodes[8]),
        (x_nodes[4],x_nodes[5]),
        (x_nodes[5],x_nodes[6]),
        (x_nodes[6],x_nodes[7]),
        (x_nodes[7],x_nodes[5]),
        (x_nodes[8],x_nodes[3])
    ]
    XG = nx.DiGraph()
    XG.add_nodes_from(x_nodes)
    XG.add_edges_from(x_edges)

    y_nodes = ["Y"+y for y in ["p", "q", "r", "s", "t", "v", "u", "m", "l", "w", "x", "y", "z"]]
    
    y_edges = [
        (y_nodes[0],y_nodes[2]),
        (y_nodes[1],y_nodes[2]),
        (y_nodes[2],y_nodes[4]),
        (y_nodes[3],y_nodes[4]),
        (y_nodes[4],y_nodes[5]),
        (y_nodes[5],y_nodes[6]),
        (y_nodes[6],y_nodes[3]),
        (y_nodes[7],y_nodes[8]),
        (y_nodes[8],y_nodes[7]),
        (y_nodes[9],y_nodes[10]),
        (y_nodes[10],y_nodes[11]),
        (y_nodes[11],y_nodes[9]),
        (y_nodes[12],y_nodes[11])
    ]
    YG = nx.DiGraph()
    YG.add_nodes_from(y_nodes)
    YG.add_edges_from(y_edges)
    return XG,YG

def make_cycle(n):
    nodes = range(n)
    edges = [(i,(i+1)%n) for i in nodes]
    G = nx.DiGraph()
    G.add_nodes_from(nodes)
    G.add_edges_from(edges)
    return G