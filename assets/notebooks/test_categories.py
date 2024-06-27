import pytest

from categories import SmallCategory,has_category_data

def test_SmallCategory():
    cat2 = SmallCategory(2)
    assert has_category_data(cat2)
    assert len(cat2['maps'])==8

    cat3 = SmallCategory(3)
    assert has_category_data(cat3)
    assert len(cat3['maps'])==56