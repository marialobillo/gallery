
var gal = Gallery.create("gal-1");

TEST.areEqual(typeof gal, "object", "Gallery shoud be an object");

TEST.areEqual(gal.el.id, "gal-1", "Gallery.el shour be the one we specified");

TEST.areEqual(gal.idx, 0, "Gallery index should start at zero");

TEST.areEqual(gal.set(4), 4, "Gallery.set (with number should return the same number passed in)");

TEST.areEqual(gal.displayImage.getAttribute("src"), "images/blue.jpg", "Gallery.set (with number)should change play image.");

TEST.areEqual(gal.set("green"), 3, "Gallery.set (with string) shoudl return the corresponding number.");

TEST.areEqual(gal.displayImage.getAttribute("src"), "images/green.jpg", "Gallery.set (with number)should change play image.");

TEST.areEqual(gal.next(), 4, "Gallery.next should advance images");

TEST.areEqual(gal.next(), 0, "Gallery i should advance images");

TEST.areEqual(gal.prev(), 4, "Gallery.next should go back images");

TEST.areEqual(gal.prev(), 0, "Gallery i should go back images");
