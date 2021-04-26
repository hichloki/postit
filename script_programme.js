let monPostIt = new PostIt("1")
let monPostIt2 = new PostIt("2")

monPostIt.newcouleur("blue")
monPostIt.PositionPt(400,150)
monPostIt.AfficherPt()

monPostIt2.PositionPt(100,80)

monPostIt2.TaillePt(300,150)

monPostIt2.newcouleur("pink")
monPostIt2.modifcontenu("textbonjour","Red")

monPostIt2.AfficherPt()
