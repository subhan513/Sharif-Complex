import { writeFileSync } from "fs";
import content from "../pages/blogposts.json";

import RSS from "rss";
 
export default async function getRSS() {
    
  const siteURL = "https://solnyne.com";
  const allBlogs = await content.posts; 
  const feed = new RSS({
    title: "Solnyne Solutions | Solar Solutions Provider",
    description: "Solnyne Solutions Provide On-Grid, Off-Grid, Hybrid, Agricultural Solar Installation Solutions on a very reasonable budget. Get a Quote now: (055) 3828617",
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, solnyne.com`,
  });
 
  // function makedate(dated){   
    
  //     var year  = dated.year;    var day  = (dated.dayOfMonth < 10 ? '0':'') + dated.dayOfMonth;    
  //     var month  = ((dated.month+1) < 10 ? '0':'') + (dated.month+1);      
  //      var dt =  year+"-"+month+"-"+day;
  //     return dt; 
  // } 
 
  
  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `${siteURL}/${post.slug}`,
      date: post.lastmod,
      description: post.shortdescription,
    });
  });
   
  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}