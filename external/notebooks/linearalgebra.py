import numpy as np


def diagonal_concatenation(MA,MB):
    MA_pad = np.pad(MA,(0,MB.shape[0]))
    MB_pad = np.pad(MB,(MA.shape[0],0))
    return MA_pad+MB_pad

def left_injection(m,n):
    return np.hstack([np.eye(m),np.zeros((n,m))])

def right_injection(m,n):
    return np.hstack([np.zeros((n,m)),np.eye(m)])

def flattened_outer_product(MA,MB):
    MA_reshape = np.reshape((MA.shape[0]*MA.shape[1],),MA)
    MB_reshape = np.reshape((MB.shape[0]*MB.shape[1],),MB)
    return np.outer(MA_reshape,MB_reshape)

def matrix_equality(MA,MB):
    return MA.shape == MB.shape and np.allclose(MA,MB)

def is_idempotent(M):
    M2 = M @ M
    return matrix_equality(M,M2)

def is_invertable(M):
    return np.linalg.det(M)!=0.0

def is_automorphism(M):
    M2 = M @ M
    return matrix_equality(np.eye(M.shape[0]),M2)
    
