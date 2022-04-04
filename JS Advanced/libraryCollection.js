class LibraryCollection {
    constructor(capacity){
      this.capacity=capacity
      this.books=[];
      this.bookCounter=0;

    }
    addBook (bookName, bookAuthor){
        this.bookCounter+=1;
        if (this.capacity<this.bookCounter){
            throw new Error ('Not enough space in the collection.')
        }
        this.books.push({bookName,bookAuthor,payed:false})
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName){
        let foundBook=this.books.find(x=>x.bookName===bookName)
        if (!foundBook){
            throw new Error (`${bookName} is not in the collection.`)
        }
        if (foundBook.payed===true){
            throw new Error (`${bookName} has already been paid.`)
        }
        this.bookCounter-=1;
        foundBook.payed=true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let foundBook=this.books.find(x=>x.bookName===bookName)
        if (!foundBook){
            throw new Error ("The book, you're looking for, is not found.")
        }
        if (foundBook.payed===false){
            throw new Error (`${bookName} need to be paid before removing from the collection.`)
        }
        let indexOfFoundBook = this.books.indexOf(foundBook);
        this.books.splice(indexOfFoundBook, 1);
        this.bookCounter-=1
        return `${bookName} remove from the collection.`;
        
    }
    getStatistics(bookAuthor){
        let resultArr=[];
        if (!bookAuthor){
          resultArr.push(`The book collection has ${this.bookCounter} empty spots left.`)
          let sortedByName=this.books.sort((a,b)=>(a.bookName).localeCompare(b.bookName));
          sortedByName.forEach((x)=>resultArr.push(`${x.bookName} == ${x.bookAuthor} - ${x.payed===true ? 'Has Paid' : 'Not Paid'  }.`))
          return resultArr.join('\n')
        }else{
        let foundBook=this.books.find(x=>x.bookAuthor===bookAuthor)
        if (!foundBook){
            throw new Error (`${bookAuthor} is not in the collection.`)
        }
        if (foundBook.payed===true){
           return `${foundBook.bookName} == ${bookAuthor} - Has Paid.`
        } else{
            return `${foundBook.bookName} == ${bookAuthor} - Not Paid.`
        }
    }

    }
}

