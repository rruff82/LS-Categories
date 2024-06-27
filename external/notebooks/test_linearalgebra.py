import pytest
import numpy as np

from linearalgebra import diagonal_concatenation, matrix_equality, \
    left_injection, right_injection


def test_matrix_equality():
    assert matrix_equality(np.eye(2),np.eye(2))
    assert not matrix_equality(np.eye(2),np.zeros((2,2)))
    assert not matrix_equality(np.eye(2),np.eye(3))
    assert not matrix_equality(np.eye(3),np.eye(2))
    assert matrix_equality(np.eye(3),np.eye(3))

    assert matrix_equality(np.array([[0,1,2],[2,3,4],[5,6,7]]),
                           np.array([[0.0,1.0,2.0],[2.0,3.0,4.0],[5.0,6.0,7.0]]))
    assert not matrix_equality(np.array([[0,1,2],[2,3,4],[5,6,7]]),
                           np.array([[0.0,1.0,2.0],[2.0,3.0,4.0],[5.0,6.0,6.9]]))

def test_diagonal_concatenation():
    I2 = np.array([[1,0],[0,1]])
    C2 = np.array([[0,1],[1,0]])
    expected_sums = [
         np.array([[1,0,0,0],[0,1,0,0],[0,0,0,1],[0,0,1,0]]),
         np.array([[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]),
    ]
    actual_sums = [
        diagonal_concatenation(I2,C2),
        diagonal_concatenation(C2,I2)
    ]
    left_inj_2_2 = left_injection(2,2)
    print(left_inj_2_2,left_inj_2_2.shape)
    
    right_inj_2_2 = right_injection(2,2)
    print(right_inj_2_2,left_inj_2_2.shape)
    
    assert not matrix_equality(actual_sums[0],actual_sums[1])
    for i in range(len(expected_sums)):
        assert actual_sums[i].shape == expected_sums[i].shape
        assert matrix_equality(actual_sums[i],expected_sums[i])
        assert matrix_equality(expected_sums[i],actual_sums[i])

    assert matrix_equality(left_inj_2_2 @ actual_sums[0] @ left_inj_2_2.T,I2)  
    assert matrix_equality(left_inj_2_2 @ actual_sums[1] @ left_inj_2_2.T,C2)
    assert matrix_equality(right_inj_2_2 @ actual_sums[0] @ right_inj_2_2.T,C2)
    assert matrix_equality(right_inj_2_2 @ actual_sums[1] @ right_inj_2_2.T,I2)
    
    
        
    