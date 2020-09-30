describe("product of an array", function(){
    it("takes in an array and returns the product", function(){
        expect(productOfArray([1,2,3])).toEqual(6);
    });
    it("takes in an array and returns the product", function(){
        expect(productOfArray([1,2,3,10])).toEqual(60);
    });
});

describe("contains", function(){
    it("searches for a value in nested object and returns true if value exist", function(){
        expect(contains(nestedObject, 44)).toEqual(true);
    });
    it("searches for a value in nested object and returns false if value doesn't exist", function(){
        expect(contains(nestedObject, "foo")).toEqual(false);
    })
})