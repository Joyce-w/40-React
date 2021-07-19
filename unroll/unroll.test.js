const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it('should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]', function () {
    const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
  ];
    expect(unroll(square)).toContain(1)
    expect(unroll(square).length).toEqual(16)
  })

  it('should return  ["a", "b", "c", "f", "i", "h", "g", "d", "e"]', function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    let res = unroll(smallerSquare)
    expect(res[3]).toEqual("f")
    expect(res[6]).toEqual("g")
    expect(res[8]).toEqual("i")
  })
});
