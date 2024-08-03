import pytest
import numpy as np
import networkx as nx

from graphs import NAKED_DOT, NAKED_ARROW,graph_sum, \
    graph_product, graph_isometry, make_C_N, make_A_N

def test_graph_isometry():
    # any object should be isomorophic to itself
    assert graph_isometry(NAKED_DOT,NAKED_DOT)
    assert graph_isometry(NAKED_ARROW,NAKED_ARROW)
    assert graph_isometry(NAKED_ARROW,NAKED_ARROW)
    # rule out obviously different
    assert not graph_isometry(NAKED_DOT,NAKED_ARROW)
    assert not graph_isometry(NAKED_ARROW,NAKED_DOT)
    # check some simple sums
    sum_D_D = graph_sum(NAKED_DOT,NAKED_DOT)
    sum_A_A = graph_sum(NAKED_ARROW,NAKED_ARROW)
    sum_A_D = graph_sum(NAKED_ARROW,NAKED_DOT)
    sum_D_A = graph_sum(NAKED_DOT,NAKED_ARROW)
    assert graph_isometry(sum_D_D,sum_D_D)
    assert graph_isometry(sum_A_A,sum_A_A)
    assert not graph_isometry(sum_D_D,sum_A_A)
    # this is where things get tricky
    
    assert graph_isometry(sum_A_D,sum_D_A)

    two_cycle = make_C_N(2)
    three_cycle = make_C_N(3)
    six_cycle = make_C_N(6)
    two_x_three = graph_product(two_cycle, three_cycle)
    

    assert graph_isometry(two_x_three,six_cycle)
    
    
    assert graph_isometry(graph_product(two_cycle,two_cycle),
                          graph_sum(two_cycle,two_cycle))

def test_session11():
    # ex 2
    assert graph_isometry(make_C_N(3),make_C_N(3))
    # ex 3
    ex3x = nx.DiGraph({0:[1],1:[2],2:[3],3:[1]})
    ex3y = nx.DiGraph({0:[1],1:[2],2:[3],3:[0]})
    assert not graph_isometry(ex3x,ex3y)
    # ex 6
    ex6a = nx.DiGraph({0:[1],1:[2],2:[1]})
    ex6b = nx.DiGraph({0:[1],1:[0,2],2:[]})
    ex6c = nx.DiGraph({0:[1,2,2],1:[],2:[0]})
    
    ex6d = nx.DiGraph({0:[1],1:[0],2:[0]})
    ex6e = nx.DiGraph({0:[1,2],1:[],2:[0]})
    ex6f = nx.DiGraph({0:[1,2,2],1:[0],2:[]})
    
    assert graph_isometry(ex6a,ex6d)
    assert graph_isometry(ex6b,ex6e)
    assert graph_isometry(ex6c,ex6f)
    
    assert not graph_isometry(ex6a,ex6b)
    assert not graph_isometry(ex6a,ex6c)
    assert not graph_isometry(ex6a,ex6e)
    assert not graph_isometry(ex6a,ex6f)
    
    assert not graph_isometry(ex6b,ex6c)
    assert not graph_isometry(ex6b,ex6d)
    assert not graph_isometry(ex6b,ex6f)
    
    assert not graph_isometry(ex6c,ex6d)
    assert not graph_isometry(ex6c,ex6e)
    
    # ex 7
    ex7a = nx.DiGraph({0:[3],1:[0],2:[0],3:[4],4:[1,2]})
    ex7b = nx.DiGraph({0:[1,3],1:[4],2:[0],3:[4],4:[2]})
    assert graph_isometry(ex7a,ex7b)
    
    
    
    
    
def test_session24_ex2():
    
    # session 24 ex 2
    g2 = nx.from_numpy_array(np.eye(2),create_using=nx.DiGraph)
    sum_D_D = graph_sum(NAKED_DOT,NAKED_DOT)
    # a)
    assert graph_isometry(sum_D_D,graph_product(NAKED_DOT,g2))
    # b)
    assert graph_isometry(graph_product(NAKED_DOT,NAKED_DOT),NAKED_DOT)
    # c)
    assert graph_isometry(sum_D_D,graph_product(NAKED_DOT,NAKED_ARROW))
    
    
def test_session25_ex5():
    
    graph_B = nx.DiGraph()
    graph_B.add_nodes_from(range(3))
    graph_B.add_edges_from([(0,1), (1,2)])
    
    
    graph_C = nx.DiGraph()
    graph_C.add_nodes_from(range(3))
    graph_C.add_edges_from([(0,1), (1,0)])
    
    
    isom_BC = graph_isometry(graph_B,graph_C)
    
    
    assert not graph_isometry(graph_B,graph_C)
    
    graph_exp = graph_sum(graph_sum(NAKED_DOT,NAKED_DOT),
                          graph_sum(NAKED_ARROW,NAKED_ARROW))
    
    graph_AxB = graph_product(NAKED_ARROW,graph_B)
    assert graph_isometry(graph_AxB,graph_exp)
    
    graph_AxC = graph_product(NAKED_ARROW,graph_C)
    assert graph_isometry(graph_AxC,graph_exp)
    