
from functools import reduce
from math import floor,sqrt
import numpy as np


def generate_N():
    i = 0
    while True:
        yield i
        i += 1

def generate_S_n(n):
    i = 0
    while i < n:
        yield range(i)
        i += 1

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

def from_zig_zag_N(n):
    # inverse of reverse_zig_zag
    # see also https://en.wikipedia.org/wiki/Pairing_function
    w = floor((sqrt(8*n+1)-1)/2)
    t = (w*w+w)/2
    x = n-t
    y = w-x
    return (int(x),int(y))

def triangular(n):
    return int((n+1)*n/2)

def reverse_zig_zag(p):
    my_sum = p[0]+p[1]
    my_triangle = triangular(my_sum)
    return my_triangle+p[0]

PRIME_NUMBERS = [2]

def prime_number_by_index(n):
    global PRIME_NUMBERS
    while n >= len(PRIME_NUMBERS):
        # sieve next prime
        p_n = PRIME_NUMBERS[-1]+1
        while not np.all(list(map(lambda x: p_n % x != 0,PRIME_NUMBERS))):
            p_n += 1
        PRIME_NUMBERS.append(p_n)
    return PRIME_NUMBERS[n]

def power_of_primes_map(v):
    size = len(v)
    prime_vec = map(prime_number_by_index,range(size))
    powers = [p**v[i] for i,p in enumerate(prime_vec)]
    return reduce(lambda x, y: x*y, powers) if len(powers) else 0

def modular_division(n,p):
    i = 1
    power = p
    modulo = n%power
    while power < n and modulo == 0:
        i += 1
        power *= p
        modulo = n%power
    return i if modulo == 0 else i-1

def prime_factorization(n):
    i = 0
    prime_powers = []
    next_prime = prime_number_by_index(i)
    while n >= next_prime:
        #print(f"Checking {n} for divisibility by {next_prime}")
        div_res = modular_division(n,next_prime)
        prime_powers.append(div_res)
        if div_res > 0:
            n = int(n/(next_prime**div_res))
        i += 1
        next_prime = prime_number_by_index(i)
    return prime_powers
    
def make_one_hot(size,idx):
    assert idx < size
    return [1 if i == idx else 0 for i in range(size)]

def check_bit(n,k):
    return (n & (2**k))!=0