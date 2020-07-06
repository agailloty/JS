out = document.getElementById("outputStats");
let normal = stdlib.base.dists.normal;

function generateNum() {
    var dist = new normal.Normal( 2.0, 4.0 );
    return dist.mean;
}

ok = generateNum();

genRD = document.getElementById("genRD");
genRD.addEventListener("click", function() {
    out.textContent = generateNum();
});