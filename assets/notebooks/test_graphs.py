import pytest
import numpy as np
import networkx as nx

from graphs import NAKED_DOT,NAKED_ARROW,graph_sum,graph_product,graph_isometry

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

    
