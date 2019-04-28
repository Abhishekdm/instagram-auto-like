var instaLike = document.getElementsByClassName("dCJp8 afkep coreSpriteHeartOpen _0mzm-");
var noOfPosts = 10;// change the number to no of posts you want to like on your timeline
for (var i = 0; i < noOfPosts; i++) {
    // note if the post is already been liked then the code will unlike it   
    instaLike[i].click();
}
//-------------------------------------------- if name matches like the post------------------------
var getNameList = document.getElementsByClassName('FPmhX notranslate nJAzx');
// will like all the posts of a person from the first 15 posts on your timeline
for (var i = 0; i < 15; i++) {
    var nameList = getNameList[i].text;
    var nameOfPerson = " test ";// replace 'test' with the name of the person you want to like the post of
    if (nameList == nameOfPerson) {
        var instaLike = document.getElementsByClassName("dCJp8 afkep coreSpriteHeartOpen _0mzm-");
        instaLike[i].click();
    }
}