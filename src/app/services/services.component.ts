import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {


  AuthorList=[
    {AuthorID:"1", AuthorQuote:"Life isn’t about getting and having, it’s about giving and being.", AuthorName:"Kevin Kruse", imgurl:"https://history.princeton.edu/sites/g/files/toruqf5351/files/styles/freeform_750w/public/Barros_190918_123.jpg?itok=ZA_-zsv4"},
    {AuthorID:"2", AuthorQuote:"Whatever the mind of man can conceive and believe, it can achieve.", AuthorName:"Napoleon Hill", imgurl:"https://www.toolshero.com/wp-content/uploads/2016/10/napoleon-hill-biography-toolshero.jpg"},
    {AuthorID:"3", AuthorQuote:"Strive not to be a success, but rather to be of value.", AuthorName:"Albert Einstein", imgurl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg"},
    {AuthorID:"4", AuthorQuote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", AuthorName:"Robert Frost", imgurl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-82587359.jpg"},
    {AuthorID:"5", AuthorQuote:"I attribute my success to this: I never gave or took any excuse.", AuthorName:"Florence Nightingale", imgurl:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg"},
    {AuthorID:"6", AuthorQuote:"You miss 100% of the shots you don’t take.", AuthorName:"Wayne Gretzky", imgurl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-51390778.jpg"},
    {AuthorID:"7", AuthorQuote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", AuthorName:"Michael Jordan", imgurl:"https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg"},
    {AuthorID:"8", AuthorQuote:"The most difficult thing is the decision to act, the rest is merely tenacity.", AuthorName:"Amelia Earhart", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {AuthorID:"9", AuthorQuote:"We become what we think about.", AuthorName:"Earl Nightingale", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {AuthorID:"10", AuthorQuote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", AuthorName:"Mark Twain", imgurl:"https://media.npr.org/assets/artslife/arts/2010/11/mark-twain/mark-twain-6fa45e42400eea8cac3953cb267d66a33825a370-s1100-c50.jpg"},
    {AuthorID:"11", AuthorQuote:"Life is 10% what happens to me and 90% of how I react to it.", AuthorName:"Charles Swindoll", imgurl:"https://media.npr.org/assets/artslife/arts/2010/11/mark-twain/mark-twain-6fa45e42400eea8cac3953cb267d66a33825a370-s1100-c50.jpg"},
    {AuthorID:"12", AuthorQuote:"The most common way people give up their power is by thinking they don’t have any.", AuthorName:"Alice Walker", imgurl:"https://www.thoughtco.com/thmb/P0DPJDBAGxGpSY8IBZ0JfiNpEQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Alice-Walker-112931058x1-56aa24d75f9b58b7d000fc00.jpg"},
    {AuthorID:"13", AuthorQuote:"The mind is everything. What you think you become.", AuthorName:"Buddha", imgurl:"https://images.theconversation.com/files/460884/original/file-20220502-24-bg7hxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"},
    {AuthorID:"14", AuthorQuote:"The best time to plant a tree was 20 years ago. The second best time is now.", AuthorName:"Chinese Proverb", imgurl:"https://images.theconversation.com/files/460884/original/file-20220502-24-bg7hxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"},
    {AuthorID:"15", AuthorQuote:"An unexamined life is not worth living.", AuthorName:"Socrates", imgurl:"https://images.saymedia-content.com/.image/t_share/MTc5NTI0NTM1MTE1OTgxOTAz/the-life-and-times-of-the-ancient-greek-philosopher-socrates.jpg"}
  ]

  StudentList=[
    {StudentName:"Poonam",StudentID:"001",StudentClass:"MCA",StudentAddress:"Aurangabad", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Pallavi",StudentID:"002",StudentClass:"MBA",StudentAddress:"Hydrabad", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Preeti",StudentID:"003",StudentClass:"MCA",StudentAddress:"Chennai", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Vrushali",StudentID:"004",StudentClass:"MBA",StudentAddress:"Pune", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Manasi",StudentID:"005",StudentClass:"MCA",StudentAddress:"Mumbai", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Supriya",StudentID:"006",StudentClass:"MCA",StudentAddress:"Aurangabad", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Akanksha",StudentID:"007",StudentClass:"MBA",StudentAddress:"Hydrabad", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Sulakshana",StudentID:"008",StudentClass:"MCA",StudentAddress:"Chennai", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Soniya",StudentID:"009",StudentClass:"MBA",StudentAddress:"Pune", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},
    {StudentName:"Sanjana",StudentID:"010",StudentClass:"MCA",StudentAddress:"Mumbai", imgurl:"https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg"},

  ]

}
