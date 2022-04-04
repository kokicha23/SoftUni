class ArtGallery{
    constructor(creator){
        this.creator=creator;
        this.possibleArticles={
        'picture':200,
        'photo':50,
        'item':250 }
        this.listOfArticles=[];
        this.guest=[]

    }
     
    addArticle(articleModel, articleName, quantity){
        let LowerCaseArticleModel=articleModel.toLowerCase();
        let quantityNumb = Number(quantity);
        let isExist = false;
     
        for (const key of Object.keys(this.possibleArticles)) {
            if (key === LowerCaseArticleModel) {
                isExist = true;
                break;
            }
        }
      if (!isExist){
        throw new Error("This article model is not included in this gallery!");
      }  
        let foundArticle=this.listOfArticles.find(x=>x.articleName===articleName)
        if (foundArticle){
            foundArticle.quantity+=quantityNumb;
        }else { 
            this.listOfArticles.push({articleModel:LowerCaseArticleModel,articleName,quantity:quantityNumb})
       }
    
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
       
}
    inviteGuest ( guestName, personality){
    let foundGuest=this.guest.find(x=>x.guestName===guestName)
    if (foundGuest){
        throw new Error(`${guestName} has already been invited.`);
    }
        if(personality==="Vip"){
            this.guest.push({guestName,points:500,purchaseArticle:0})
        }
        else if(personality==="Middle"){
            this.guest.push({guestName,points:50,purchaseArticle:0})
        }
        else{
            this.guest.push({guestName,points:50,purchaseArticle:0})
        }
        
    return `You have successfully invited ${guestName}!`
     
}
buyArticle ( articleModel, articleName, guestName){
    let article = this.listOfArticles.find(o => o.articleName === articleName && o.articleModel === articleModel);
    if (!article){
        throw new Error("This article is not found.");
    }
    if (article.quantity == 0) {
        return `The ${articleName} is not available.`;
    }
    let foundGuest = this.guest.find(o => o.guestName === guestName)
    if(!foundGuest){
       return "This guest is not invited."
    }
    let neededPoints=this.possibleArticles[articleModel];
    if (foundGuest.points<=neededPoints){
        return `You need to more points to purchase the article.`;
    }else{
        foundGuest.points-=neededPoints;
        foundGuest.quantity-=1;
        foundGuest.purchaseArticle+=1;
    }
    return `${guestName} successfully purchased the article worth ${neededPoints} points.`
}

showGalleryInfo (criteria){
    
 if (criteria==='article'){
  let resultArr=[];
  resultArr.push("Articles information:")
  for (const key of Object.values(this.listOfArticles) ) {
 
    resultArr.push(`${key.articleModel} - ${key.articleName} - ${key.quantity-1}`)
 }
 
  return resultArr.join("\n")
 }
 else if (criteria==="guest"){
    let resultGuestArr=[];  
    resultGuestArr.push("Guests information:")
    for (const key of Object.values(this.guest) ) {
        resultGuestArr.push(`${key.guestName} - ${key.purchaseArticle}`)
     }
    return resultGuestArr.join("\n")
 }
 }

}

 

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));