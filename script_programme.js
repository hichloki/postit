let monPostIt = new PostIt("pt1")
let monPostIt2 = new PostIt("pt2")

monPostIt.newcouleur("gold")
monPostIt.PositionPt(25,350)
monPostIt.AfficherPt()

monPostIt2.PositionPt(25,150)

monPostIt2.TaillePt(150,150)

monPostIt2.newcouleur("pink")
monPostIt2.modifcontenu("textbonjour","Red","20","cursive")

monPostIt2.AfficherPt()
