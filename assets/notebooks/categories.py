# what is a category?
# in python, there should be a natural
# "category of finite hashable sets" that we can work with
# using python dictionaries to represent the maps
# what is a category?
# in python, there should be a natural
# "category of finite hashable sets" that we can work with
# using python dictionaries to represent the maps
def compose_dicts(A,B):
    return {k:B[v] for k,v in zip(A.keys(),A.values())}

def compose_maps(MA,MB):
    assert MA["codomain"] == MB["domain"]
    return {
        "domain":MA["domain"],
        "codomain":MB["codomain"],
        "map":compose_dicts(MA["map"],MB["map"])
    }

def is_endomap(m):
    return m["domain"]==m["codomain"]

def is_identity_dict(d):
    return all([k==v for k,v in zip(d.keys(),d.values())])

def is_identity_map(m):
    return is_endomap(m) and is_identity_dict(m["map"])

def force_set(L):
    try:
        return set(L)
    except TypeError:
        return set(list(map(str,L)))

def map_equality(m1,m2):
    return not (
        m1["domain"]!=m2["domain"] or 
        m1["codomain"]!=m2["codomain"] or 
        m1["map"]!=m2["map"]
    )

def find_identity_maps(C):
    endomaps = list(filter(is_endomap,C["maps"]))
    return list(filter(is_identity_map,endomaps))

def has_category_data(C):
    # DATA
    # 1: it has objects
    if "objects" not in C:
        print("No objects, no category!")
        return False
    # 2: it has maps
    if "maps" not in C:
        print("No maps, no category!")
        return False
    # 3: each map must have both:
    # domain and codomain which are objects
    set_of_objects = force_set(C["objects"])
    for m in C["maps"]:
        if "map" not in m or \
            "domain" not in m or \
            "codomain" not in m or \
            not force_set([m["domain"],m["codomain"]]) <= set_of_objects:
            print(f"Failed domain/codomain check {m} {set_of_objects}")
            return False
    # 4: each object must have an identity map
    identity_maps = find_identity_maps(C)
    if not set_of_objects <= force_set(list(map(lambda x: x["domain"],identity_maps))):
            return False
    # 5: each pair of maps with matching domain/codomain must have a unique composite map
    for m1 in C["maps"]:
        for m2 in C["maps"]:
            if not map_equality(m1,m2) and m1["codomain"] == m2["domain"]:
                m3 = compose_maps(m1,m2)
                comp_match = list(filter(lambda x: map_equality(x,m3),C["maps"]))
                if len(comp_match) != 1:
                    print(f"Failed composition check {m1}, {m2} --> {m3}\n{comp_match}")
                    return False
    return True
        

# i defined this stuff in session 15
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
              print(f"beta:{beta_y} != f_alpha:{f_alpha_x}")
              print(k,v)
              return False
    return True

# in Session 5, the authors discuss a "minimal category" with 2 objects and 8 maps
# this generalizes that process to n objects
def SmallCategory(n):
    objects = [list(range(i+1)) for i in range(n)]
    map_count = 0
    maps = []
    # for every possible combination of domain and codomain
    for i,o_0 in enumerate(objects):
        domain_size = len(o_0)
        for j,o_1 in enumerate(objects):
            # add every possible map with that domain and codomain
            codomain_size = len(o_1)
            # maps exist as long as 
            total_maps = codomain_size**domain_size
            print(f"{total_maps} from |{o_0}|={domain_size}  to |{o_1}|={codomain_size}")

            maps_found = make_all_maps(set(o_0),set(o_1))
            assert len(maps_found) == total_maps
            for m in maps_found:
                maps.append({
                    "domain":o_0,
                    "codomain":o_1,
                    "map":m
                })
            map_count += total_maps
    return {
        "objects":objects,
        "maps":maps
    }
    

