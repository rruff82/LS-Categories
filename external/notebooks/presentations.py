import networkx as nx
import numpy as np

from graphs import follow_endomap

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

# maybe our sum is as easy as list concatenation
def presentation_sum(PA,PB):
    a_size,b_size = len(PA['generators']),len(PB['generators'])
    # hopefully this hashing guarantees uniqueness
    combined_generators = [
        "A_"+str(hash(a)) for a in PA['generators']
    ]+[
        "B_"+str(hash(b)) for b in PB['generators']
    ]
    print(combined_generators)
    assert len(combined_generators)==len(set(combined_generators))
    a_retraction = {k:v for k,v in zip(PA['generators'],range(a_size))}
    b_retraction = {
        k:v for k,v in zip(PB['generators'],[i+a_size for i in range(b_size)])
    }
    print(a_retraction)
    print(b_retraction)
    
    a_rels = [
        (
            (combined_generators[a_retraction[i[0][0]]],i[0][1]),
            (combined_generators[a_retraction[i[1][0]]],i[1][1])
        ) for i in PA['relations']
    ]
    b_rels = [
        (
            (combined_generators[b_retraction[i[0][0]]],i[0][1]),
            (combined_generators[b_retraction[i[1][0]]],i[1][1])
        ) for i in PB['relations']
    ]
    return {
        'generators':combined_generators,
        'relations':a_rels+b_rels,
        'injection_maps':[a_retraction,b_retraction]
    }