import pytest

from numbertheory import prime_number_by_index, \
    prime_factorization, zig_zag, reverse_zig_zag, from_zig_zag_N, \
    check_bit


def test_prime_numbers():
    first_fifteen = list(map(prime_number_by_index,range(15)))
    expected_vals = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
    for i in range(15):
        assert first_fifteen[i] == expected_vals[i]
        
@pytest.mark.parametrize("test_input,expected", 
                         [
                             (0,[]), 
                             (1,[]), 
                             (2,[1]), 
                             (3,[0, 1]), 
                             (4,[2]),
                             (5,[0, 0, 1]),
                             (6,[1, 1]),
                             (7,[0, 0, 0, 1]),
                             (8,[3]), 
                             (9,[0, 2]),
                             (56,[3, 0, 0, 1])
                         ])
def test_prime_factorization(test_input, expected):
    assert prime_factorization(test_input) == expected

def test_zig_zag():
    zz10 = [z for z in zig_zag(10)]
    for i,z in enumerate(zz10):
        assert reverse_zig_zag(z)==i
        assert from_zig_zag_N(i)==z

@pytest.mark.parametrize("test_input,expected", 
                         [   #(n,i) -> True iff the ith bit of n is 1 
                             ((0,0),False), 
                             ((1,0),True), 
                             ((2,0),False),
                             ((2,1),True),
                             ((2,3),False),

                             ((5,0),True),
                             ((5,1),False),
                             ((5,2),True),
                             ((5,3),False),
                             ((5,4),False),
                             ((5,5),False),

                             ((6,0),False),
                             ((6,1),True),
                             ((6,2),True),
                             ((6,3),False),
                             ((6,4),False),
                             ((6,5),False)                            
                         ])
def test_check_bit(test_input,expected):
    assert check_bit(test_input[0],test_input[1]) == expected