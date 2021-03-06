defineSuite([
         'Core/Cartesian4',
         'Core/Cartesian2',
         'Core/Cartesian3'
     ], function(
         Cartesian4,
         Cartesian2,
         Cartesian3) {
    "use strict";
    /*global it,expect*/

    it("construct0", function() {
        var v = new Cartesian4();
        expect(v.x).toEqual(0);
        expect(v.y).toEqual(0);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("construct1", function() {
        var v = new Cartesian4(1);
        expect(v.x).toEqual(1);
        expect(v.y).toEqual(0);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("construct2", function() {
        var v = new Cartesian4(1, 2);
        expect(v.x).toEqual(1);
        expect(v.y).toEqual(2);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("construct3", function() {
        var v = new Cartesian4(1, 2, 3);
        expect(v.x).toEqual(1);
        expect(v.y).toEqual(2);
        expect(v.z).toEqual(3);
        expect(v.w).toEqual(0);
    });

    it("construct4", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        expect(v.x).toEqual(1);
        expect(v.y).toEqual(2);
        expect(v.z).toEqual(3);
        expect(v.w).toEqual(4);
    });

    it("clone", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        var w = v.clone();
        expect(v.equals(w)).toBeTruthy();
    });

    it("getZero", function() {
        var v = new Cartesian4.getZero();
        expect(v.x).toEqual(0);
        expect(v.y).toEqual(0);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("getUnitX", function() {
        var v = new Cartesian4.getUnitX();
        expect(v.x).toEqual(1);
        expect(v.y).toEqual(0);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("getUnitY", function() {
        var v = new Cartesian4.getUnitY();
        expect(v.x).toEqual(0);
        expect(v.y).toEqual(1);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("getUnitZ", function() {
        var v = new Cartesian4.getUnitZ();
        expect(v.x).toEqual(0);
        expect(v.y).toEqual(0);
        expect(v.z).toEqual(1);
        expect(v.w).toEqual(0);
    });

    it("getUnitW", function() {
        var v = new Cartesian4.getUnitW();
        expect(v.x).toEqual(0);
        expect(v.y).toEqual(0);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(1);
    });

    it("getXYZ", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        expect(v.getXYZ().equals(new Cartesian3(1, 2, 3))).toBeTruthy();
        expect(v.w).toEqual(4);
    });

    it("getXY", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        expect(v.getXY().equals(new Cartesian2(1, 2))).toBeTruthy();
        expect(v.z).toEqual(3);
        expect(v.w).toEqual(4);
    });

    it("magnitudeSquared", function() {
        var v = new Cartesian4(2, 3, 4, 5);
        expect(v.magnitudeSquared()).toEqual(54);
    });

    it("magnitude", function() {
        var v = new Cartesian4(2, 3, 4, 5);
        expect(v.magnitude()).toEqual(Math.sqrt(54));
    });

    it("normalize", function() {
        var v = new Cartesian4(0, 2, 0, 0).normalize();
        expect(v.x).toEqual(0);
        expect(v.y).toEqual(1);
        expect(v.z).toEqual(0);
        expect(v.w).toEqual(0);
    });

    it("dot", function() {
        var s = new Cartesian4(2, 3, 4, 5).dot(new Cartesian4(6, 7, 8, 9));
        expect(s).toEqual(2 * 6 + 3 * 7 + 4 * 8 + 5 * 9);
    });

    it("add", function() {
        var v = new Cartesian4(1, 2, 3, 4).add(new Cartesian4(5, 6, 7, 8));
        expect(v.equals(new Cartesian4(6, 8, 10, 12))).toBeTruthy();
    });

    it("multiplyWithScalar", function() {
        var v = new Cartesian4(1, 2, 3, 4).multiplyWithScalar(2);
        expect(v.equals(new Cartesian4(2, 4, 6, 8))).toBeTruthy();
    });

    it("multiplyComponents", function() {
        var v = new Cartesian4(1, 2, 3, 4).multiplyComponents(new Cartesian4(5, 6, 7, 8));
        expect(v.equals(new Cartesian4(5, 12, 21, 32))).toBeTruthy();
    });

    it("divideByScalar", function() {
        var v = new Cartesian4(2, 4, 6, 8).divideByScalar(2);
        expect(v.equals(new Cartesian4(1, 2, 3, 4))).toBeTruthy();
    });

    it("getMinimumComponent", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        expect(v.getMinimumComponent()).toEqual(1);
    });

    it("getMaximumComponent", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        expect(v.getMaximumComponent()).toEqual(4);
    });

    it("mostOrthogonalAxis", function() {
        expect(new Cartesian4(1, 2, 3, 4).mostOrthogonalAxis().equals(Cartesian4.getUnitX())).toBeTruthy();
        expect(new Cartesian4(4, 1, 2, 3).mostOrthogonalAxis().equals(Cartesian4.getUnitY())).toBeTruthy();
        expect(new Cartesian4(3, 4, 1, 2).mostOrthogonalAxis().equals(Cartesian4.getUnitZ())).toBeTruthy();
        expect(new Cartesian4(2, 3, 4, 1).mostOrthogonalAxis().equals(Cartesian4.getUnitW())).toBeTruthy();
    });

    it("negate", function() {
        var v = new Cartesian4(1, 2, 3, 4).negate();
        expect(v.equals(new Cartesian4(-1, -2, -3, -4))).toBeTruthy();
    });

    it("abs", function() {
        var v = new Cartesian2(-1, -2, -3, -4).abs();
        expect(v.equals(new Cartesian2(1, 2, 3, 4))).toBeTruthy();
    });

    it("subtract", function() {
        var v = new Cartesian4(4, 5, 6, 7).subtract(new Cartesian4(4, 3, 2, 1));
        expect(v.equals(new Cartesian4(0, 2, 4, 6))).toBeTruthy();
    });

    it("equalsEpsilon", function() {
        expect(new Cartesian4(1, 1, 2, 1).equalsEpsilon(new Cartesian4(1, 1, 2, 1), 0)).toBeTruthy();
        expect(new Cartesian4(1, 1, 2, 1).equalsEpsilon(new Cartesian4(1, 1, 2, 2), 1)).toBeTruthy();
        expect(new Cartesian4(1, 1, 2, 1).equalsEpsilon(new Cartesian4(1, 1, 2, 3), 1)).toBeFalsy();
    });

    it("toString", function() {
        var v = new Cartesian4(1, 2, 3, 4);
        expect(v.toString()).toEqual("(1, 2, 3, 4)");
    });
});