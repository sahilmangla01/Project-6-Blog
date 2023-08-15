import React, { createContext, useState } from "react";


export const Store = createContext();
const DataStore = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      cat: "Bollywood",
      image:
        "https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg",
        title :"RRR",
      description:
        "RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries, namely Alluri Sitarama Raju and Komaram Bheem ",
      long_description:"In 1920, during the British Raj, Governor Scott Buxton and his wife Catherine visit a forest in Adilabad. There they abduct Malli, an artistically-talented young girl from the Gond tribe. Enraged, the tribe's guardian Komaram Bheem embarks for Delhi to rescue her, disguising himself as a Muslim named Akhtar. The Nizamate of Hyderabad, sympathetic to the Raj, warns Scott's office of the impending danger. Undeterred, Catherine enlists A. Rama Raju, an ambitious officer in the Indian Imperial Police, to quell the threat. Seeking clues to Malli's whereabouts, Raju and his uncle, Venkateswarulu, attend several pro-independence gatherings where he feigns to support independence. Lachhu, Bheem's gullible aide, believing Raju's ruse, attempts to recruit him into Bheem's plot. Before taking Raju to Bheem, Lachhu discovers Raju's identity as a police officer and flees. "
    },
    {
      id: 2,
      cat: "Bollywood",
      image:
        "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2022/bhediya/poster.jpg",
        title : "Bhediya",
      description:
        "Bhaskar finds himself changing after being bitten by a wolf in the forests of Arunachal. While Bhaskar begins to transform into a shape-shifting werewolf",
        long_description:"Bhaskar and his cousin Janardhan Jana visit a small town in Arunachal Pradesh as part of a road-building project. They meet two natives named Jomin and Panda , who show them around. Bhaskar is chased and bitten by a wolf in the wild one night. Jana and Jomin quickly transport him to Dr. Anika, the local veterinarian. Seeing the large bite mark on Bhaskar's back and his obvious discomfort, she administers an injection in the hopes of relieving his suffering.The next day, Bhaskar begins to see changes inside himself. He has heightened senses of smell and hearing, and he communicates with animals. Meanwhile, the locals and tribals are opposed to the idea of cutting down trees in woods to build roads and refuse to support it"
    },

    {
        id :3,
        cat : "Bollywood",
        image : "https://stat4.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01.jpg",
        title: "Pathan",
        description:"An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.",
        long_description:"In 2019, the Indian Government revokes Article 370 of the Indian Constitution, which grants special status for Jammu and Kashmir. The news impacts a cancer-ridden Pakistani army general Qadir, who decides to exact vengeance against India and signs a contract with Jim, who leads Outfit X, a private terrorist organization. Meanwhile, Pathaan is a RAW agent, who along with his senior officer Nandini Grewal open a unit dubbed Joint Operations and Covert Research (JOCR) in order to recruit former RAW agents who were forced to retire due to past trauma or injury, but want to continue serving the country. With RAW joint secretary, Colonel Sunil Luthra's acceptance, Pathaan and his team head to Dubai to stop Outfit X's suspected plans of attacking the President of India at a scientific conference. However, they realize that their actual plan was to kidnap two scientists Dr. Farooqui and Dr. Sahani and the information they received about the imminent attack on the President was just a ruse to mislead them."
    },
    {
        id :4,
        cat : "Bollywood",
        image : "https://e1.pxfuel.com/desktop-wallpaper/357/60/desktop-wallpaper-kaabil-hoon-kaabil-movie.jpg",
        title: "Kaabil",
        description:"The blissful lives of a visually impaired couple, come to a halt when the former is raped by men with political links. When she commits suicide, Rohan vows to take revenge.",
        long_description:"The film follows a blind dubbing artist who becomes disillusioned when his wife faces injustice and dies. He becomes a vigilante and decides to seek revenge against those responsible for his wife's death, while also dodging police with a cover that no one would believe a blind man can kill someone. Kaabil was released theatrically on 25 January 2017.[9][10] Roshan received the Nomination of Filmfare Award for Best Actor for his performance at the 63rd Filmfare Awards. The film was commercially successful despite performing weakly upon its release in China in 2019.[11]"
    },{
      id:5,
      cat : "Bollywood",
      image:"https://m.media-amazon.com/images/M/MV5BZThmMWFlOWYtY2M0YS00OWIxLWI4MzgtYTJhMDNkZDY4ZjhjXkEyXkFqcGdeQXVyNzc4NzEzNjY@._V1_.jpg",
      title: "Mission Mangal",
      description:"A group of scientists at ISRO battle in their personal and professional lives and work tirelessly towards their only motive, the Mars Orbiter Mission."
      ,long_description:"Across the landscapes of Bengaluru, at ISRO, after the failed launch of GSLV-F06 on 25 December 2010, due to a miscalculation by Project Director Tara Shinde (Vidya Balan), Rakesh Dhawan (Akshay Kumar), a fellow scientist working with her, takes the blame for the mistake. As a result, he is relocated to work on Mangalyaan (Mars-craft) as punishment, where Tara joins him out of guilt. The new GSLV missions are given to Rupert Desai, a NASA scientist of Indian origin. The Mars Orbiter Mission (MOM) is thought of as an impossible mission by his coworkers due its aim of reaching Mars with its tight budget."
    },{
      id:6,
      cat: "Bollywood",
      image:"https://c4.wallpaperflare.com/wallpaper/842/128/873/yeh-jawaani-hai-deewani-wallpaper-preview.jpg",
      title: "Yeh Jawaani Hai Deewani",
      description:"Kabir and Naina meet during a trekking trip where she falls in love with him but refrains from expressing it. They soon drift apart but end up meeting at a friend's wedding."
      ,long_description:"Naina Talwar is a medical student absorbed in her studies. She tops her classes but feels like an outcast due to her introverted nature. An encounter with an old classmate, Aditi Mehra, makes her realize that she wants more from life than high marks. Thus, she makes an impulsive decision to follow Aditi on a hiking trip into the Himalayas, in Manali. During the hike, she renews her friendship with other former classmates, Kabir Bunny Thapar and Avinash Avi Shiv. Bunny is a charmer whose dream is to wander and discover the world and has no interest in ever settling down, while Avi is a playboy who is addicted to alcohol and betting."
    },{
      id: 7,
      cat : "Bollywood",
      image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2014/09/bang-bang-new-poster-news.jpg",
      title : "Bang Bang!",
      description: "A chance encounter with a mysterious charmer (Hrithik Roshan) leads to an adrenaline-fueled, transcontinental adventure for a mild-mannered bank employee (Katrina Kaif)."
      ,long_description:"It is then that Omar Zafar proposes to pay a hefty amount to the one who steals the ancient historically significant Kohinoor Diamond from London's high security tower. It is then that Rajveer Nanda (played by Hrithik Roshan) executes a perfectly planned diamond heist with Hamid Gul's (played by Javed Jaffrey) confederation without a single flaw or any hard evidence. Rajveer contravenes to accept the reward in exchange of the Kohinoor diamond as he develops suspicion. He also comes across Harleen Sahni (played by Katrina Kaif) who is a receptionist working in the Bank of Shimla. She is on her pursuit to find her perfect match with the help of online dating portal. She has been living her small yet happy life in India post her parents' demise after which she was brought back by her grandmother to take care of her. She is a smart yet whimsical girl waiting for her perfect match. On the day of the date, Harleen misconceives Rajveer to be Vicky and approaches Rajveer which leaves him astonished by her grace and he reverts back to her cute salutation. Harleen blindly falls for Rajveer and gets carried away by his charm"
    },{
      id:8,
      cat : "Bollywood",
      image :"https://www.koimoi.com/wp-content/new-galleries/2019/09/dream-girl-movie-review-1.jpg",
      title :"Dream Girl",
      long_description:"Karamveer Karam Singh is good at impersonating the female voice from a very young age and hence keeps getting female lead roles in plays (Sita in Ramayan and Radha in Krishnaleela) since his childhood. Although he protests every time that would settle for a much smaller but male character, he is currently unemployed and performs these roles because they pay well. His friend Smiley runs a liquor shop and supports him in every one of his endeavors. His father, Jagjeet Singh runs a shop dealing in funeral items and is sunk deep into loans he owes to various banks. Due to low turnover, he is unable to pay back the EMI's.",
      description :"Karamveer gets a job at a call centre due to his ability to talk in a woman's voice. He garners a big fan following but soon gets in trouble with his overzealous clients."
    },{
      id:9,
      cat:"Bollywood",
      image:"https://www.teahub.io/photos/full/145-1450209_sonakshi-sinha-and-akshay-kumar-in-holiday.jpg",
      title: "Holiday- A Soldier Is Never Off Duty",
      long_description:"Virat Bakshi (Akshay Kumar), an Indian Army captain along with his battalion, arrives in Mumbai to spend his holidays with his family and siblings. Virat is forced by his parents and younger sisters to meet Saiba (Sonakshi Sinha), who they choose for him to get married to. During that interaction, Virat realizes that Saiba is an old-fashioned girl. Wherein, actually Saiba was pretending forced by her parents to abide to the ceremony rituals. Saiba is a college-level boxer and a modern girl. Virat realises this and falls in love with her but Saiba does not abide. But eventually, they both fall in love with each other. Once Virat and his sub-inspector of police and mate Mukund (SUMEET RAGHAVAN) witnesses a bus explosion which they had travelled by. In no time, Virat captures the culprit who blew the bus into flames and discovers that the culprit is just an executer who is a sleeper cell who is hired to plant the bomb. To further investigations, Virat finds out that the actual terrorist mastermind behind this explosion is planning in the city a fleet of explosions in the days to come.",
      description:"Virat, a soldier, accidentally bumps into a terrorist who plans to rip apart Mumbai. He then gathers his team to protect the city ."
    },{
      id:10,
      cat: 'Bollywood',
      image:"https://images.firstpost.com/wp-content/uploads/2018/05/Sanju-poster-1200.jpg",
      title: "Sanju",
      long_description:"At the beginning of Sanju, we see one of the characters trying to draw a comparison between 'Baba' and 'Bapu' in a hilarious sort of manner when asked by Sanjay Dutt (Ranbir Kapoor) to pen his biography. Of course, Dutt's not the way so the man is quickly shown the door. Right then and there, Rajkumar Hirani establishes the fact that Sanju isn't your regular biopic! Sanjay Dutt may be synonymous with Gandhigiri but in real life, the picture was quite different. Bole toh in Sanju's words, Apna Life Full Saanp Seedhe Ka Board Hai, Kabhie Up To Kabhie Down!",
      description:"From the depths of addiction to the heights of stardom to underworld entanglements, this biopic traces the checkered past of Indian actor Sanjay Dutt."
    },
    {
      id:11,
      cat: 'Bollywood',
      image:"https://coupenyaari.in/wp-content/webp-express/webp-images/uploads/2022/06/Upcoming-Web-Series-2022-in-India-Netflix-Amazon-Prime-More-768x432.jpg.webp",
      title: "The best upcoming Hindi web series 2022 .",
      long_description:"1. Panchayat : Season 2 of Panchayat takes us back to Phulera, as Panchayat Secretary Abhishek Tripathi continues to struggle between feeling at home and wanting more for himself. 2. Delhi Crime :  Released in 2022, Season 2, detailing a series of gruesome home invasions, is no different. In five fast-paced episodes, we go back into the world of Delhi crime and Delhi police, made very real by the standout cast, led by Shefali Shah.3. Rocket Boys : Based on the lives of Dr. Homi J. Bhabha and Dr. Vikram Sarabhai,Rocket Boys is a fascinating peek into India's formative years in the field of aeronautics. Jim Sarbh and Ishwak Singh's easy camaraderie translates well on screen and doesn't let the show drag. 4. Human : If you've ever wondered how unethical and dangerous the business of saving lives can be, Human, a show about the dark side of Indian pharma, has the answer for you. The gripping psychological thriller will compel you to binge-watch the full season, especially with Shefali Shah's portrayal of a ruthless pharma boss.5. Apharan : Much like the first season, the second season of Apharan fully embraces its over-the-top, weird world and doesn't give the very aptly cast Arunoday Singh time to breathe. There's suspense, action, that kitschy '70s vibe, and so much more that keeps fans hooked through the 11-episode run.6. Gullak : In its third season, Gullak continued to charm fans with its disarming portrayal of the middle-class Mishra family and their problems, so relatable that for many it's almost like watching their own parents and siblings on screen. In five crisp episodes, Jameel Khan, Geetanjali Kulkarni, Vaibhav Raj Gupta, and Harsh Mayar prove yet again that ordinary is not always boring.7. NCR Days : Not your average college show, NCR Days is the story of Monu, played by Nikhil Vijay, who comes to NCR from Jodhpur for an MBA, primarily so he can marry his girlfriend back home. In his journey of growing, changing, and finding himself, he makes new friends and learns some hard lessons. Writer-director Ambrish Verma doesn't just create a rich, complex world in only five episodes, but also plays a central character in the show.8. Abhay : Season 3 of Abhay continues to follow UP Police SP Abhay Pratap Singh (played by Kunal Kemmu) as he battles personal demons and solves gruesome crimes. This season differs from earlier seasons in that it pits him against one central villain — a charismatic cult leader planning mass murder, played to perfection by Vijay Raaz. Kunal's performance keeps you rooting for Abhay through some very tumultuous times.9. Campus Diaries : Featuring some very popular content creators, like Harsh Beniwal and Saloni Gaur, Campus Diaries tells the coming-of-age stories of six students at Excel University. They navigate love, life, and all the angst and challenges that come with learning how to be an adult in the real world.10. College Romance : A quintessential new-adult rom-com, College Romance continued to be a hit with fans as Season 3 released in 2022. In just five easy-to-binge episodes, love and friendship are tested amidst scandals and long-distance relationships. So, if you're not in college anymore, get ready to miss the good ol' days!"
      ,description:"1. Panchayat 2. Delhi Crime 3. Rocket Boys  4. Human 5. Apharan 6. Gullak 7. NCR Days 8. Abhay .9. Campus Diaries 10. College Romance "
    },{
      id:12,
      cat: 'Bollywood',
      image:"https://wirally.com/wp-content/uploads/2022/11/Most-Anticipated-Indian-Movies-Of-2023.jpg",
      title: "5 Most Anticipated Indian Movies Of 2023.",
      long_description:"1.Pushpa Allu Arjun, Rashmmika Mandanna & Fahadh Faasil starrer Pushpa became a thumping pan-India hit. After the huge blockbuster of their first installment, the makers of Pushpa are coming up with Pushpa 2 in 2023. 2.Pathaan-Shahrukh Khan’s comeback movie Pathaan is coming to theaters in 2023. Already released Glimpse of Pathan movie promises some action Directed by Siddarth Anand. 3.Tiger 3--After Tiger & Tiger Zindaa Hein, Salman Khan is coming up with Tiger 3 this year 2023. Katirina Kaif is playing the lead role and Emraan Hashmi roped in for some villain role.4. Ponniyin Selvan 2 -After the humongous hit of Ponniyin Slevan part 1, Mani Ratnam & Team is getting ready for Ponniyin Selvan 2 release in 2023. PS 2 is likely to hit theaters in April 2023.5.Kabza -Kannada star hero Upendra is coming up with Kabza movie. The big budget movie is likely to release in 2023 summer of 2023. "
      ,description:"1.Pushpa .  2.Pathaan. 3.Tiger 3 4. Ponniyin Selvan 2 5.Kabza "
    },{
      id:13,
      cat: 'Bollywood',
      image:"https://staticimg.amarujala.com/assets/images/2023/05/25/750x506/raka-oura-rana-ka-parama-kahana_1684994035.jpeg",
      title: "Rocky Aur Rani Kii Prem Kahaani ",
      long_description:"Trade experts believe that Rocky Aur Rani Kii Prem Kahaani is likely to make an opening weekend collection of ₹35-40 crore.Given the buzz around Karan Johar's latest directorial venture, trade experts believe Rocky Aur Rani Ki Prem Kahaani will likely make an opening collection of ₹8-10 crore on Friday. The film stars Alia Bhatt, Ranveer Singh, Dharmendra, Shabana Azmi, and Jaya Bachchan in the lead roles. It is slated for a theatrical release on July 28. (Also read| Rocky Aur Rani celeb reviews: Gauri Khan gives 5 stars, Neetu praises Alia)"
      ,description:"Trade experts believe that Rocky Aur Rani Kii Prem Kahaani is likely to make an opening weekend collection of ₹35-40 crore."
    },{
      id:14,
      cat: 'Bollywood',
      image:"https://www.hindustantimes.com/ht-img/img/2023/07/26/550x309/Actor-Vicky-Kaushal-was-last-seen-in-film--Zara-Ha_1690366700592.jpg",
      title: "Vicky Kaushal completes 8 years in Bollywood",
      long_description:"Vicky Kaushal, known for his roles in films like Raazi and Uri: The Surgical Strike, embraces the pressures and responsibilities that come with stardom, seeing them as opportunities for growth as an artist and individual. He wants audiences to have high expectations of his work and is committed to delivering good performances. He believes that success and failure are fleeting and focuses on the process of becoming a better actor. He acknowledges that the fate of a film after its release is beyond his control and emphasizes giving his all to his work.It’s been eight years since Vicky Kaushal got into mainstream spotlight with Masaan, after doing a couple of brief roles in projects such as Bombay Velvet and Luv Shuv Te Chicken Khurana. As the film completed eight years of its release earlier this week, the actor admits that he doesn’t like to shy away from the pressures that comes with this stardom, and in fact, it only motivates him to push himself as an artiste."
      ,description:"Vicky Kaushal, known for his roles in films like Raazi and Uri: The Surgical Strike, embraces the pressures and responsibilities that come with stardom"
    },{
      id:15,
      cat: 'Bollywood',
      image:"https://www.hindustantimes.com/ht-img/img/2023/07/25/550x309/ayushmann_khurrana_dream_girl_1690263290525_1690263314411.jpg",
      title: "Dream Girl 2",
      long_description:"After much teasing on social media over several weeks, Ayushmann Khurrana revealed his look as Pooja from Dream Girl 2. And here's how the internet reacted.Ayushmann Khurrana has finally revealed his face in the getup of a glamouous woman named Pooja from his upcoming film Dream Girl 2. The new poster shows Ayushmann as a woman looking at his real self in the mirror as he applies lipstick. He also set the countdown for the film's release which is set to arrive in theatres on August 25. Just like the first installment, Dream Girl 2 has also been directed by Raaj Shaandilya. However, there is a new female lead, Ananya Panday. The film was mostly shot in Mathura."
      ,description:"After much teasing on social media over several weeks, Ayushmann Khurrana revealed his look as Pooja from Dream Girl 2."
    },{
      id:16,
      cat: 'Technology',
      image:"https://images.news18.com/ibnlive/uploads/2023/06/whatsapp-image-2023-06-08-at-15.38.00.jpeg?impolicy=website&width=0&height=0",
      title: "Realme 11 Pro+ Review: Should You Buy For Rs 27,999?",
      long_description:"Priced under Rs 30,000 in India, this 200MP camera smartphone from Realme has a mixed bag of features. The Realme 11 Pro+ smartphone offers an attractive and appealing design. While the device has a big curved display and a good selfie camera, the rear camera struggles in low-light conditions and indoor settings. Also, the UI is confusing - thanks to pre-installed apps, excessive bloatware and ads. Overall, if you’re looking for a stylish smartphone with a curved display and a decent camera in the mid-segment, the Realme 11 Pro+ could be a suitable choice.This new mid-range Realme smartphone has a curved display panel. The Realme 11 Pro+ 5G comes with a 6.7-inch full-HD+ curved display with 120Hz refresh rate and up to 950 nits brightness, which you often see in almost all mid-range smartphones. The only plus here is the curved AMOLED display as it gives you a premium feeling and enhances the visual experience while consuming content on the screen. The Realme 11 Pro+ offers impressive colour reproduction.",
      description:"Realme 11 Pro+ is available in two storage variants: 8GB+256GB, priced at Rs 27,999 and 12GB+256GB, priced at Rs 29,999 in India. "
    },{
      id:17,
      cat: 'Technology',
      image:"https://duet-cdn.vox-cdn.com/thumbor/0x0:1820x1213/750x500/filters:focal(910x607:911x608):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24247717/lp_logo_3.0.jpg",
      title: "OpenAI can’t tell if something was written by AI after all",
      description:"OpenAI shuttered a tool that was supposed to tell human writing from AI due to a low accuracy rate. ",
      long_description:"OpenAI shuttered a tool that was supposed to tell human writing from AI due to a low accuracy rate. In an (updated) blog, OpenAI said it decided to end its AI classifier as of July 20th. “We are working to incorporate feedback and are currently researching more effective provenance techniques for text,” the company said. As it shuts down the tool to catch AI-generated writing, OpenAI said it plans to “develop and deploy mechanisms that enable users to understand if audio or visual content is AI-generated.” There’s no word yet on what those mechanisms might be, though.OpenAI fully admitted the classifier was never very good at catching AI-generated text and warned that it could spit out false positives, aka human-written text tagged as AI-generated. OpenAI, before it added its update shutting down the tool, said the classifier could get better with more data. "
    }
    ,{
      id:18,
      cat: 'Technology',
      image:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986646/acastro_STK086_01.jpg",
      title: "Tesla under investigation in California over Autopilot safety ",
      long_description:"Tesla is facing a new investigation with the California attorney general’s office looking into safety issues with the company’s Autopilot feature as well as its marketing practices, CNBC reported on Wednesday.The outlet was tipped off to the investigation by Tesla owner Greg Wester, who California Attorney General Rob Bonta’s office called to ask about his August 2022 Federal Trade Commission complaint about his Tesla’s “phantom braking” problem and what he believed to be misleading claims around the company’s Full Self-Driving (FSD) system.Tesla CEO Elon Musk’s claims about his cars’ fully driverless capabilities date back to 2016 when he said all new Tesla EVs would have the necessary hardware for it. In fact, the company has dragged its feet on it for so long that it’s now giving drivers a “one-time” transfer of their purchased upgrade to their next EV from the company.",
      description:"Tesla is facing a new investigation with the California attorney's office looking into safety issues with the company’s Autopilot feature ."
    }
    ,{
      id:19,
      cat: 'Technology',
      image:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24390408/STK149_AI_01.jpg",
      title: "ChatGPT for Android ",
      long_description:"The ChatGPT for Android app is now available in the Google Play Store, launching a few months after the free iOS app brought the chatbot to iPhones and iPads. According to a company tweet, it’s available first in the US, India, Bangladesh, and Brazil, with other countries set to follow later, mimicking the staged rollout we saw for the iOS version.On July 27th, OpenAI announced additional availability, saying the Android ChatGPT app is now available in Argentina, Canada, France, Germany, Indonesia, Ireland, Japan, Mexico, Nigeria, the Philippines, the UK, and South Korea.As we noted previously, the launch of an Android app is coming after Sensor Tower and Similarweb data showed drops in web traffic and app installations for June",
      description:"The ChatGPT for Android app is now available in the Google Play Store, launching a few months after the free iOS app brought the chatbot to iPhones and iPads."
    }
    ,{
      id:20,
      cat: 'Technology',
      image:"https://images.indianexpress.com/2023/05/xbox-home-ui.jpg",
      title: "Microsoft’s new Xbox Home UI ",
     long_description:"Microsoft first started testing a new Xbox Home UI nearly a year ago, and the company is now ready to deliver it to all Xbox owners. Starting today, an overhaul to the Xbox Home interface is rolling out to all Xbox Series X / S and Xbox One consoles, with more space for backgrounds and quick access to the store, search, and settings.The new Xbox Home experience will start rolling out today “to a subset of all Xbox consoles,” according to Ivy Krislov, senior product manager lead for Xbox experiences. “This means that some customers will need to wait a few weeks to get their hands on it.”",
      description:"Starting today, an overhaul to the Xbox Home interface is rolling out to all Xbox Series with more space for backgrounds and quick access to the store, search, and settings."
    }
    ,{
      id:21,
      cat: 'Technology',
      image:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23318440/akrales_220309_4977_0336.jpg",
      title: "New SEC rules put a time limit on reporting hacks ",
      description:"Public companies will now have to disclose cybersecurity incidents sooner, thanks to a rule adopted by the Securities ."
      ,long_description:"Public companies will now have to disclose cybersecurity incidents sooner, thanks to a rule adopted by the Securities and Exchange Commission. Under the new policy, the SEC will require public companies to report data breaches and hacks four business days after they are discovered      Companies will have to disclose any cybersecurity incidents on a Form 8-K filing. These publicly available documents typically inform shareholders about major changes to the company — and now they’ll include a new Item 1.05 for cybersecurity incidents. The disclosure should include information on “nature, scope, and timing,” as well as “its material impact or reasonably likely” on the company. There is an exception to the four-day disclosure requirement, however. The SEC says that the disclosure can be delayed if the US attorney general determines that alerting shareholders to the incident “would pose a substantial risk to national security or public safety.”"
    }
    ,{
      id:22,
      cat: 'Technology',
      image:"https://etimg.etb2bimg.com/photo/100862768.cms",
      title: "10 Hot Cybersecurity Startups ",
      description:"Startups with innovative new tools for securing the cloud, applications and authentication are among those that have stood out from the first half of this year..",
      long_description:"Hot Startups While venture funding has been harder to come by in 2023, many cybersecurity startups have continued to thrive as demand for innovative new tools in the space remains strong. In particular, startups that specialize in fast-growing areas such as cloud security, application security and passwordless authentication have been seeing major interest from partners and customers during the first half of the year."
    }
    ,{
      id:23,
      cat: 'Technology',
      image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/untitled_design_56-sixteen_nine.jpg?VersionId=QoT_FHJZm73aWGnV7SWkk6L06CGvxYt4&size=690:388",
      title: "42 per cent CEOs believe AI can destroy humanity in 5-10 years",
      long_description:"AI or artificial intelligence is the buzzword in the world of tech nowadays. While AI can be of benefit in various situations, there are drawbacks to it as well. This is what the top tech leaders of the world believe. With the advancement of AI, top tech CEOs, including Twitter and Tesla head Elon Musk, are worried about artificial intelligence taking over humanity. According to the latest survey conducted by CNN at the Yale CEO Summit earlier this week, 42 percent of of CEOs believe AI can take over humanity in the next few years.Especially now that Musk has signed an open letter that calls for a halt to the development of AI systems for at least 6 months.",
      description:" With the advancement of AI, top tech CEOs, including Twitter and Tesla head Elon Musk, are worried about artificial intelligence  "
    }
    ,{
      id:24,
      cat: 'Technology',
      image:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935560/acastro_STK103__03.jpg",
      title: "Amazon’s new page alerts buyers to  unsafe products",
      description:"Amazon has a new place to share product recall info for products purchased on its site. ",
      long_description:"Amazon has a new place to share product recall info for products purchased on its site. The personalized alert page can help consumers learn if anything they’ve bought on Amazon has known issues that make it dangerous to keep using.Amazon says it “always proactively” notifies customers about items purchased on its site that are part of a recall or otherwise have safety alerts. But now the company is creating a dedicated place where it says customers can be more aware of recalls issued on items ordered from Amazon. Customers will also get a “personalized email” with details on the product recall, plus an alert banner plastered on their “your orders” page."
    }
    ,{
      id:25,
      cat: 'Technology',
      image:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23962442/acastro_STK067__03.jpg",
      title: "T-Mobile says its ultrafast 5G capable of up to 3.3Gbps",
      long_description:"T-Mobile has started the rollout of its new 5G tech that can deliver speeds of up to 3.3Gbps using carrier aggregation, which combines four different 5G channels into one for devices that can handle it (only Samsung’s newer Galaxy S23 phones at the moment), similar to a trick used by Wi-Fi routers to create a faster connection.That’s even faster than what you’d get out of mmWave 5G, which is more heavily touted by Verizon and AT&T as also being capable of extremely high speeds — Ookla recently reported download speeds of up to 1.6Gbps in the US. However, it has limited range and device support and is easily hampered by common impediments like trees and buildings.",
      description:"T-Mobile has started the rollout of its new 5G tech that can deliver speeds of up to 3.3Gbps using carrier aggregation."
    }
    ,{
      id:26,
      cat: 'Technology',
      image:"https://techgossip.org/wp-content/uploads/2017/10/analytics-2697949_1280.jpg",
      title: "5 JOBS YOU CAN DO FROM ANYWHERE",
      long_description:"1 .Translator If you speak more than one language, you have a lot of opportunities to start working as a translator. This job offers the possibility to work from anywhere, and you may expect the annual salary of $44,190. 2.Freelance Writer If you have experience as a writer or if you want to start doing this job more seriously, make sure to know that it is also one of the best jobs you can do remotely. You can also deal with travel writing, and the average annual salary for this kind of job may go up to $42,120. 3.Proofreader-The annual salary for this job may go up to $49,258. Although some people may think that grammar and good command of a language are not important, they actually are, and you don’t realize it until you get to the point they need a proofreader. 4.Social Media Manager-We all already spend a lot of time on social media, so why not earn some money for that? There are many job opportunities when it comes to social media managers, as everyone today wants to promote their business online. The expected average annual salary for this position is $51,613. 5.Online Teaching-Native English speakers have a lot of opportunities when it comes to online teaching, and especially if they have a teaching English certificate. As the job is done online, you can do it from anywhere in the world, with the expected average annual salary of $55,860. "
      ,description:"1 .Translator   2.Freelance Writer  3.Proofreader. 4.Social Media Manager 5.Online Teaching "
    }
    ,{
      id:27,
      cat: 'Technology',
      image:"https://www.businessinsider.in/thumb/msid-96990109,width-700,resizemode-4,imgsize-449732/tech/news/if-you-still-arent-sure-what-chatgpt-is-this-is-your-guide-to-the-viral-chatbot-that-everyone-is-talking-about/img63b9a841fd2a2700180841d0.jpg",
      title: "Guide to OpenAI's ChatGPT",
      long_description:"OpenAI's ChatGPT has drawn users at a feverish pace and spurred Big Tech to release other AI chatbots. The paid version, ChatGPT Plus, is rolling out updated features including web-browsing and plug-ins.Since OpenAI released its blockbuster bot ChatGPT in November, users have casually experimented with the tool, with even Insider reporters trying to simulate news stories or use it to message potential dates.Its rapid adoption since then by some 100 million users in just its first two months is already changing how the internet will look and feel to users. With both Microsoft and Google incorporating generative AI into their search engines, it seems a matter of time before other websites adopt some kind of AI-driven interaction."
      ,description:"OpenAI's ChatGPT has drawn users at a feverish pace and spurred Big Tech to release other AI chatbots. The paid version, ChatGPT Plus, is rolling out updated features including web-browsing and plug-ins."
    }
    ,{
      id:28,
      cat: 'Technology',
      image:"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2023/04/whatsapp-image-2023-04-03-at-16-1680518984.jpeg",
      title: "Top five wireless mouse and keyboard combos ",
      long_description:"1.Logitech MK215: Rs. 1,795 The Logitech MK215 is a popular choice for those looking for an affordable wireless keyboard and mouse combo. The full-size keyboard includes low-profile keys with a silent operation, a spill-resistant design, and eight hotkeys for instant access to frequently used applications and media controls. 2.HP 200 Wireless Combo: Rs. 1,450 The HP 200 wireless combo is a great option for those who prefer a sleek and stylish design. The full-size keyboard features a slim profile, adjustable legs, and a spill-resistant design, while the mouse provides accurate tracking with a 1000 dpi optical sensor and comfortable usage with its contoured design.3.Amkette Wi-Key Plus - Rs 1,199 The Amkette Wi-Key Plus wireless combo features a full-size keyboard with chiclet keys and a comfortable mouse with a precise optical sensor. The keyboard has low-profile keys with scissor-switch technology for comfortable and quiet typing. It also has multimedia hotkeys for quick access to media controls. 4.iBall Dusky Duo 06: (Rs. 1425) The iBall Dusky Duo 06 is a budget-friendly wireless keyboard and mouse combo with a sleek and modern design. The keyboard has low-profile keys for comfortable and quiet typing and a spill-resistant design. 5.Dell KM117: (Rs. 1999) The Dell KM117 is a great option for those looking for a wireless keyboard and mouse combo with long battery life. The full-size keyboard features a chiclet-style key design with multimedia keys for easy access to media control functions."
      ,description:"1.Logitech MK215. 2.HP 200 Wireless Combo:  3.Amkette Wi-Key Plus  4.iBall Dusky Duo 06 . 5.Dell KM117 "
    }
    ,{
      id:29,
      cat: 'Technology',
      image:"https://i2-prod.manchestereveningnews.co.uk/incoming/article27391129.ece/ALTERNATES/s810/0_SPAIN_Apple_171345.jpg",
      title: "Apple iPhone 15 Pro Max ",
      long_description:"As reported in the Liverpool Echo, a release date has yet to be confirmed. However, Apple almost always announces its new line of smartphones in the first two weeks of September. For example, the iPhone 14 was unveiled on Wednesday, September 7, 2022 and the iPhone 13 on Tuesday, September 14, 2021.All four iPhone 14 handsets saw a price hike in the UK last year, with prices jumping from between £70 for the base iPhone 14 and £150 for the iPhone 14 Pro. However, there's no word yet on how much the iPhone 15 Pro and Pro Max will cost.The iPhone 15 Pro Max could be getting a new look, with rumours suggesting it will feature more rounded edges than past iPhones. That claim has been backed up by leaks of iPhone 15 dummy units showing off rounded edges in addition to other rumoured design changes, like the addition of both USB-C and an action button."
      ,description:"As reported in the Liverpool Echo, a release date has yet to be confirmed. However, Apple almost always announces its new line of smartphones in the first two weeks of September."
    }
    ,{
      id:30,
      cat: 'Technology',
      image:"https://vivorajasthan.com/storage/media/gy1LgaNoU2B106iI9nJkx7n8M3c2fAzEQymS00Cr.jpeg",
      title: "Trend on social media  AI Art Photo",
      long_description:"Imagine the best version of your pictures & Lensa may create it for you. Beyond the conventional photo editing tools or filters for colour grading, this app is worth downloading for creating infinite magic avatars of your pictures. All you need is some of your selfies in different profiles & select the plan for how many avatars you would like to create.Whether you select a pack of 20 or recreate more using a different picture, the best part is- not even two images are repeated."
      ,description:"Imagine the best version of your pictures & Lensa may create it for you. Beyond the conventional photo editing tools or filters for colour grading, this app is worth downloading for creating infinite magic avatars of your pictures. "
    }
    ,{
      id:31,
      cat: 'Hollywood',
      image:"https://thedailyguardian.com/wp-content/uploads/2023/07/04-opp-dm-mobile-banner-1080x745-pl-f01-050523-1-1-1-6458870c70c1d-1.jpg",
      title: "Oppenheimer day 6 collection:  earns total of ₹67.85 crore",
      long_description:"Oppenheimer Box Office: There is a constant fall in collections of Christopher Nolan's Oppenheimer, though not major, during the weekdays. According to a report on Sacnilk.com, the film dropped to ₹5.85 crore on Wednesday as per early estimates. It is however, performing way better than Margot Robbie and Ryan Gosling's Barbie which released on the same day in theatres last week. Cillian Murphy plays J Robert Oppenheimer, famously called the father of the atomic bomb while Emily Blunt is in the role of his wife Katherine Kitty. Matt Damon, Robert Downey Jr. and Florence Pugh also have pivotal roles in the film.",
      description:"Cillian Murphy plays J Robert Oppenheimer, famously called the father of the atomic bomb while Emily Blunt plays his wife Katherine 'Kitty'. "
    }
    ,{
      id:32,
      cat: 'Hollywood',
      image:"https://cdn.images.express.co.uk/img/dynamic/36/1200x712/4462368.jpg?r=1671310315811",
      title: "Matt Damon reveals he refused lead role in Avatar",
      long_description:"Matt Damon, who recently appeared in Christopher Nolan's Oppenheimer, says he turned down Avatar because he was shooting for the Bourne franchise.Matt Damon has revealed that he “turned down the most money an actor has ever been offered” when he said no to Sam Worthington's role in James Cameron's 2009 blockbuster fantasy epic Avatar. While he didn't confirm the amount, the reported remuneration as per the CNN report is around $250 million",
      description:"Matt Damon has revealed that he “turned down the most money an actor has ever been offered” when he said no to Avatar."
    }
    ,{
      id:33,
      cat: 'Hollywood',
      image:"https://www.hindustantimes.com/ht-img/img/2023/07/26/550x309/kvg_1690364282057_1690364349434.jpg",
      title: "Cillian Murphy reflects on almost playing Batman",
     long_description:"Cillian Murphy opened up about having auditioned for the lead role in Christopher Nolan's Batman trilogy. He lost the part to Christian Bale.Cillian Murphy is earning rave reviews for his performance in Oppenheimer. In a new interview with GQ, the actor opened up about losing out on the leading role as Batman which went to his co-star Christian Bale. The actor lost out on the role in the trilogy but was eventually cast as the villain Dr. Jonathan Crane (aka The Scarecrow) in Batman Begins, The Dark Knight, and The Dark Knight Rises",
      description:"Cillian Murphy reveals in a new interview with GQ, about losing out on the leading role as Batman "
    }
    ,{
      id:34,
      cat: 'Hollywood',
      image:"https://www.hindustantimes.com/ht-img/img/2023/07/26/550x309/Elon_Musk_1690359853433_1690359871477.jpg",
      title: "Elon Musk mocks Margot Robbie's Barbie",
      long_description:"Elon Musk slammed Barbie, one of the biggest films of 2023, which grossed $337 million globally in its first weekend. Here's how internet reacted to his remark.Elon Musk has mocked the box office hit Barbie on Twitter, now called X. The Tesla founder had recently accused the film of using the term 'patriarchy' at the drop of a hat. He was responding to a Barbenheimer meme that compared Twitter to Barbie and his new X name for his social network to Oppenheimer.Elon Musk recently said, “If you take a shot every time Barbie says the word ‘patriarchy,’ you will pass out before the movie ends.” Barbie follows ‘stereotypical Barbie’ (Margot Robbie) and Ken (Ryan Gosling) as they leave Barbieland and venture into the real world following an existential crisis.",
      description:" The Tesla founder had recently accused the film of using the term 'patriarchy' at the drop of a hat"
    }
    ,{
      id:35,
      cat: 'Hollywood',
      image:"https://www.hindustantimes.com/ht-img/img/2023/07/22/550x309/Invincible_season_2_official_trailer_teaser_1690017150532_1690017150695.jpeg",
      title: "Invincible, The Wheel of Time are gearing up for the second season",
      long_description:"All new episodes are set to be out for Invincible on November 3, 2023, as the teaser trailer for the sequel is now out. Based on the comics by Ryan Ottlet, Cory Walker, and Robert Kirkman, the story is showcased through Mark Grayson, an 18-year-old boy whose father is the most powerful superhero on the face of the earth. Still contemplating the scenario from Nolan's betrayal in the first season, Mark faces problems getting back to a normal life as he is confronted with all new problems in the following season.",
      description:" Cory Walker, and Robert Kirkman, the story is showcased through Mark Grayson, an 18-year-old boy whose father is the most powerful superhero on the face of the earth."
    }
    ,{
      id:36,
      cat: 'Hollywood',
      image:"https://wallpapercave.com/wp/wp11685753.jpg",
      title: "Avatar: The Way Of Water",
      long_description:"Story: A worthy sequel to the 2009 film Avatar, James Cameron takes us back to the stunning world of Pandora, where human turned Na'vi Jake Sully (Sam Worthington) and Na'vi princess Ney'tiri (Zoe Saldaña) must do everything it takes to protect their children from the ‘sky people’ (humans from earth).Humans call the Na’vi ‘hostiles and insurgents’, when it is they who forcefully infiltrate and occupy their land. Despite its magical, fictional setting, Avatar is not devoid of socio-political themes. It addresses race, civilisation, takes a strong anti-military stand and makes a plea for environment conservation through its simple story of parents and children. A spectacular climax revolves around parents protecting their children and vice versa.",
      description:" A worthy sequel to the 2009 film Avatar, where human turned Na'vi Jake Sully and Na'vi princess Ney'tiri must do everything it takes to protect their children from the ‘sky people’ "
    }
    ,{
      id:37,
      cat: 'Hollywood',
      image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/06/the-flash-movie-review-02.jpg",
      title: "The Flash",
      description:"Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
      long_description:"Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future. Barry Allen is struck by a bolt of lightning and thus, an extraordinary power is born inside him: The Speed Force. When he uses this power to run back in time and save his mother, he creates a world without heroes and General Zod has returned. To defeat him, his only hope rests in the hands of a retired Batman, another Barry and an imprisoned kryptonian."
    }
    ,{
      id:38,
      cat: 'Hollywood',
      image:"https://i.ebayimg.com/images/g/prkAAOSw1gddTvsB/s-l1200.webp",
      title: "Friends",
      long_description:"Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama. The show starts off with each character in their 20's, and expands over a 10 year period, as each character tries to find happiness, success and what the true meaning of a friend really is. Our 6 famous characters are Rachel Green, Phoebe Buffay, Monica Geller, Ross Geller, Joey Tribbiani and Chandler Bing. Click on Meet the Cast to find out more about these unique characters and the stars behind them",
      description:"Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City."
    }
    ,{
      id:39,
      cat: 'Hollywood',
      image:"https://andersonvision.com/wp-content/uploads/2023/06/SOAC-Key-Art.jpeg",
      title: "Son of a Critch Season 1: Premier Date, Time, Trailer ",
      long_description:"Heartfelt comedy series, Son of a Critch, explores an 11-year-old's mature perspective, using humor to connect with his limited world. Son of a Critch is the hilarious and very real story of a young Mark coming of age in the 1980s. The series is a heartfelt window in the life of a child — who is much older inside than his 11 years — using comedy and self-deprecation to win friends and connect with the small collection of people in his limited world.",
      description:"Son of a Critch is the hilarious and very real story of a young Mark coming of age in the 1980s. The series is a heartfelt window in the life of a child — who is much older inside than his 11 years"
    }
    ,{
      id:40,
      cat: 'Hollywood',
      image:"https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2017/10/the-hitmans-bodyguard-banner.jpg?fit=1170%2C620&ssl=1",
      title: "The Hitman's Bodyguard",
      long_description:"The Hitman's Bodyguard is a 2017 action comedy film[7] directed by Patrick Hughes and written by Tom O' Connor. It stars Ryan Reynolds and Samuel L. Jackson with Gary Oldman and Salma Hayek. In the film, Michael Bryce (Reynolds) must protect Darius Kincaid, an imprisoned hitman (Jackson), who is on his way to testify at the International Criminal Court against a sadistic Eastern European dictator Vladislav Dukhovich (Oldman).",
      description:"One of the world's top bodyguards gets a new client, a world class hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial alive and on time."
    }
    ,{
      id:41,
      cat: 'Hollywood',
      image:"https://imgs.search.brave.com/7fA5OHMtm84HdgzKKA_aBLW92OkfkET9gI_NQcZIOQk/rs:fit:474:326:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaGlnaG9u/Y2luZW1hYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDQvVGhlLVN1cGVy/LU1hcmlvLUJyb3Mt/TW92aWUtRnVsbC1Q/bG90LVN1bW1hcnkt/TGVha2VkLWFuZC1T/cG9pbGVycy1SZWFk/LUhlcmUuanBnP3c9/MTA4MCZzc2w9MQ",
      title: "Super Mario Bros",
      long_description:"Chris Pratt voices the character of Mario in the Super Mario Bros. movie which is released on April 5, 2023. Mario is a happy-go-lucky Italian plumber thats always trying to rescue Princess Peach.The animated Nintendo film has an all-star cast that voices the characters from Anya Taylor-Joy to Jack Black, Seth Rogen, and more. The highly anticipated film brings the characters from the iconic Nintendo video game to life and you will not believe which A-list stars voice the characters. To see who plays who, you can scroll through the gallery to see all of the photos. Anya Taylor-Joy plays the character of Princess Peach, who is always getting captured by Bowser and needs the Mario brothers help. Jack Black plays Bowser, who is your quintessential villain that breathes fire and is always trying to capture Princess Peach.Keegan-Michael Key voices the character of Toad – your friendly little neighborhood helper that is always there to help Mario along the way. Seth Rogen voices Donkey Kong, a tough, run-and-tumble character. Fun fact: the first time Mario ever appeared in a video game was the Donkey Kong game. Kevin Michael Richardson voices Kamek, a small, wise sorcerer thats always up to no good.Fred Armisen plays Cranky Kong, Donkey Kongs grumpy uncle, who used to run a shop in the games where you could buy items."
      ,description:"Chris Pratt voices the character of Mario in the Super Mario Bros. movie which is released on April 5, 2023. "
    }
    ,{
      id:42,
      cat: 'Hollywood',
      image:"https://hollywoodlife.com/wp-content/uploads/2023/07/henry-cavill-leaving-the-witcher-ec-ftr.jpg?resize=768%2C432",
      title: "Henry Cavill Leaves ‘The Witcher’",
      long_description:"After three seasons of playing Geralt of Rivia on The Witcher, Henry Cavill has left the hit Netflix series and will be moving on to new opportunities. The season 3 finale began to turn the page on what will be a new chapter for the series. Before the show returned for the first half of season 3, Netflix announced in October 2022 that Henry would be replaced by a different actor in season 4. Fans were shocked and disappointed since Henry has become synonymous with Geralt.So, why is Henry leaving The Witcher? How did the show leave his character? Is there a chance he could return eventually? Here’s everything you need to know about his big exit now that Part 2 of The Witcher season 3 is out."
      ,description:"After three seasons of playing Geralt of Rivia on The Witcher, Henry Cavill has left the hit Netflix series and will be moving on to new opportunities. "
    }
    ,{
      id:43,
      cat: 'Hollywood',
      image:"https://i.ytimg.com/vi/ChZr4jEbZBI/maxresdefault.jpg",
      title: "BTS Singer Jimin Plays Guitar From ‘Barbie’ ",
      long_description:"“Hi Ryan and Hi Ken, it’s Jimin. Congrats on your big release,” said the K-pop superstar in a video posted to his social media on July 24, days after Ryan Gosling upheld “the Ken Code” by giving the BTS member Ken’s guitar from the Barbie movie. Jimin, 27, showed off the instrument, which bore a white horse and the name “KEN” in the Metallica font on the body. “Thank you for this guitar. I really love it, and I look forward to watching Barbie. Go, Barbie!”"
      ,description:" K-pop superstar in a video posted to his social media on July 24, days after Ryan Gosling upheld “the Ken Code” by giving the BTS member Ken’s guitar from the Barbie movie. "
    }
    ,{
      id:44,
      cat: 'Hollywood',
      image:"https://people.com/thmb/O0x2JBuReezW3T-P7TWlqYnYokk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/thomas-haden-church-heard-rumors-of-new-tobey-spiderman-sequel-072523-tout-55caf204ffa040b0bd5f04e536846a88.jpg",
      title: "Spider-Man 3’ New Tobey Maguire Sequel",
      long_description:"Thomas Haden Church, 63, revealed some information about a possible future Spider-Man sequel with the original star of the 2002 film, Tobey Maguire. The actor, who played the role of villain Sandman in 2007’s Spider-Man 3 and 2021’s Spider-Man: No Way Home, said he has “heard rumors” that another installment could happen, and if it does, he’s ready to make at least a cameo. When asked by ComicBook.com which of the three live-action Spider-Men he would like his character to fight in the future, he mentioned Tobey.Well, back with Tobey, with Tobey, because that’s who I started out with,” he told the outlet. "
      ,description:"Thomas Haden Church, 63, revealed some information about a possible future Spider-Man sequel with the original star of the 2002 film, Tobey Maguire. "
    }
    ,{
      id:45,
      cat: 'Hollywood',
      image:"https://www.indy100.com/media-library/emily-blunt-reveals-she-adores-having-matt-damon-as-a-neighbour.png?id=34634329&width=1200&height=600&coordinates=0%2C24%2C0%2C330",
      title: "Matt Damon Reveals Why Kissing Scarlett Johansson Was ‘Hell’ ",
      long_description:"Many men would quickly sign up for a chance to lock lips with Scarlett Johannson, but for Matt Damon, it was an unenjoyable task. The pair starred in the 2011 flick We Bought A Zoo, and the dramedy had a kissing scene just for them. Unfortunately, Matt, 52, said they had to film the scene right after Scarlett, now 38, ate a stinky sandwich. “I had to kiss Scarlett Johansson — can you imagine how horrible that was for me? It was hell!” he sarcastically told Emily Blunt during a July 20 video they filmed with LADbible. What happened was, we did a shot before lunch and it was this nice little two-shot that ended in the kiss. And it was really good,” he recalled. After the scene"
      ,description:"Many men would quickly sign up for a chance to lock lips with Scarlett Johannson, but for Matt Damon, it was an unenjoyable task. "
    }
    ,{
      id:46,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/cycling-overview-1440x810.jpg?w=1110",
      title: "Cycling: Health Benefits, How to Get Started",
      long_description:"At its most fundamental level, cycling is simply getting on a bicycle and riding it. Any pedaling you do on that bike, whether it’s a few loops around the block or a century ride, counts as physical activity. But what makes a bike ride an intense or easy workout for you, of course, depends on your fitness level. This type of activity does build strength, particularly in the lower-body muscles like the quadriceps — but it's primarily an aerobic exercise, according to Milwaukee-based Paul Warloski, USA Cycling–certified cycling coach and ACE-certified personal trainer. ",
      description:"Any pedaling you do on that bike, whether it’s a few loops around the block or a century ride, counts as physical activity. "
    }
    ,{
      id:47,
      cat: 'Fitness',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBQKonnEt2HVoIJGr1lWLbgGhxWADteFtWg&usqp=CAU",
      title: "Running:  Health Benefits",
      long_description:"Running can deliver a host of both physical and mental health benefits (as can most types of exercise, of course). Here a few to know about that have specific links to running: 1.Boosted Mood and Energy Levels A study published in 2018 found that running for as little as 15 minutes can improve mood and energy levels, and it had more of an effect for participants than meditation, deep breathing, progressive muscle relaxation. 2.Boosted Memory, Focus, and Task-Switching Because running causes biochemical substances called endocannabinoids to be released in the bloodstream and into the brain, it optimizes brain function . 3.Improved Cardiovascular Health A research review published in 2020 found that increased rates of participation in running, regardless of how frequently you run, show lower risk of cardiovascular-related mortality",
      description:"Running can deliver a host of both physical and mental health benefits such as: Boosted Mood and Energy Levels and Boosted Mood and Energy Levels "
    }
    ,{
      id:48,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/which-cardio-machine-is-best-1440x810.jpg?w=1110",
      title: "Treadmill",
      description:"Treadmill is a machine with an endless moving belt for walking or running. “I’d call this the bread-and-butter of cardio machines,” says Araceli De Leon."
      ,long_description:"Treadmill is a machine with an endless moving belt for walking or running. “I’d call this the bread-and-butter of cardio machines,” says Araceli De Leon, an ACE-certified personal trainer and health coach. Muscles Targeted The treadmill primarily helps build your cardiovascular endurance, says De Leon, but walking or running will also work the lower body muscles, including the quadriceps, glutes, hamstrings, and calves, according to ACSM. It’s not the most effective way to build these muscles, but using the treadmill will help to maintain them, Summerville adds. Perks You can adjust the speed and incline to increase intensity or perform an interval or HIIT workout, says De Leon. Compared with the elliptical and rower, a treadmill has been found to burn more fat"
    }
    ,{
      id:49,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/is-the-3-2-8-barre-pilates-plan-really-a-good-workout-routine-1440x810.jpg?w=1110",
      title: "Is the 3-2-8 Method Really a Good Workout Routine?",
      long_description:"The fitness expert created the 3-2-8 method to help busy fitness enthusiasts get the most out of their workouts in less time, according to her Body by Barre website. It’s more of a workout plan or schedule than a specific workout, involving weekly strength training workouts plus low-impact pilates or barre workouts, and taking an average of 8,000 daily steps. According to Rose, the method offers a variety of benefits, including reduced inflammation, period cycle regulation, and weight loss.",
      description:"Rose shared a follow-up video on TikTok breaking down exactly the 3-2-8 barre Pilates method. It calls for you each week to do three weighted workouts."
    }
    ,{
      id:50,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/tips-to-help-you-stick-with-exercise-when-managing-type-2-diabetes-alt-722x406.jpg?w=1110",
      title: "7 Tips to Help You to Manage Type 2 Diabetes",
      long_description:"1. Take Baby Steps When Beginning an Exercise Routine If you’re a couch potato who suddenly runs 5 miles on your first day of exercise, you’ll be sore on day two — perhaps with blisters on your feet and ready to throw in the towel 2.2. Choose a Physical Activity You Enjoy Doing.-You’re also more likely to stick with your exercise plan if it’s fun, invigorating, and suits your abilities. 3. Use the Buddy System to Increase Accountability 4. Reward Yourself With Healthy Treats for Breaking a Sweat 5.Formally Schedule Your Sweat Sessions .6. Prep for Your Workouts a Day in Advance. 7. Check Your Blood Sugar Before and After Exercise",
      description:"Take Baby Steps When Beginning an Exercise Routine, Choose a Physical Activity You Enjoy Doing ,Use the Buddy System to Increase Accountability"
    }
    ,{
      id:51,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/womens-health/endometriosis/cs-how-exercise-can-help-endometriosis-722x406.jpg?w=1110",
      title: "The Benefits of Exercising",
      long_description:"Exercise Can Boost Your Mood, Exercise Can Help Relieve Pain , Exercise Can Restore Strength to Your Pelvic Floor and  Exercise Benefits Your Whole Body. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits.",
      description:"Exercise Can Boost Your Mood, Exercise Can Help Relieve Pain , Exercise Can Restore Strength to Your Pelvic Floor and  Exercise Benefits Your Whole Body. "
    }
    ,{
      id:52,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/stair-climber-workout-overview-guide-1440x810.jpg?w=1110",
      title: "Stair Climbing Workouts: Health Benefits",
      long_description:"Stair climbing is a type of vertical training. As the name implies, it involves ascending (walking up, or, if you’re more advanced, running up) flights of steps. It can be a type of everyday activity, exercise, or sport. Benefits are: 1.Improved Metabolic Health, 2.Better Cardiorespiratory Fitness, 3.Boosted Energy and Mood",
      description:"Stair climbing is a type of vertical training. As the name implies, it involves ascending flights of steps. It can be a type of everyday activity, exercise, or sport."
    }
    ,{
      id:53,
      cat: 'Fitness',
      image:"https://i.ytimg.com/vi/UWR4gAh7E-c/maxresdefault.jpg",
      title: "Guinness alert: Indian schoolgirl becomes the worlds youngest yoga instructor",
      long_description:"Praanvi Gupta, a 7-year-old girl from India, has created a Guinness World Record by becoming the worlds youngest yoga instructor (female). She has been approved and certified as an RYT00 (Registered Yoga Teacher) by the Yoga Alliance Organisation after completing the 200-hour Yoga Teacher Training Course.According to the records website, shes even younger than the youngest yoga instructor (male) Reyansh Surani — also from India — who received his certification in July 2021, at the age of 9 years and 220 days.Praanvi, who would watch her mother practise yoga at home, began her yoga journey at the tender age of just 3.5 years. After months of observing and imitating her mother, the young girl started practising yoga on her own followed by enrolling in formal yoga classes at the age of seven .I want to spread the love of yoga to as many people as possible,” she told guinnessworldrecords.com, on her passion for teaching",
      description:"I want to spread the love of yoga to as many people as possible, she said"
    }
    ,{
      id:54,
      cat: 'Fitness',
      image:"https://images.indianexpress.com/2023/01/workout-2.jpg?resize=450,250",
      title: "This 10-minute workout will help keep lethargy at bay",
      description:"Yasmin Karachiwala, a celebrity fitness instructor, shared an easy 10-minute workout routine that can be done anywhere, anytime!",
      long_description:"A plank pose, or Kumbhakasana, is one of the foundational poses in yoga. A high plank roll is a variation to the traditional plank pose. Singh said, “It provides stability and strength to the core muscles, which contain your oblique, lower back, and all of the side muscles. This exercise will also help enhance your twisting stability.To perform this move, go down on your fours. Make sure your hands are directly under your shoulders with your back and legs aligned in a straight line. Contract your abs and rotate and pivot towards the right. Press your hands while knocking your feet on the other side. Repeat this with the other leg as well.“Reverse lunges are an excellent way to work your hamstrings, glutes, calves and quads, while providing you with lower body strength,” said Singh. It is a great option for beginners as it is easy to control the backward motion.First, stand shoulder-width apart. Then, inhale and carefully take a big step backwards with your right foot as you bend both knees to 90 degrees, making sure your weight is distributed evenly between both legs. Now, exhale and extend both knees while transferring your weight onto your left foot. At the same time, raise your right foot to bring your knee near your chest. Lower your right leg to the starting position. Repeat this on the other side"
    }
    ,{
      id:55,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/does-golf-count-as-exercise-1440x810.jpg?w=1110",
      title: "Does Golf Count as Exercise?",
      long_description:"All golf counts as physical activity and can be beneficial to overall health. It’s a good way to burn calories and improve overall conditioning for daily life. Golf can sometimes count as moderate aerobic activity, particularly when the course is walked. But golf doesn’t meet the standard for high intensity exercise or for strength training. Golfers would still benefit from a few sessions of higher-intensity activities each week, such as pickleball or jogging, as well as two days per week of strength training.",
      description:"Golf doesn’t necessarily overload the muscles repeatedly in a way that counts as strength training, and depending on the pace of play and how you’re getting from hole to hole"
    }
    ,{
      id:56,
      cat: 'Fitness',
      image:"https://imgs.search.brave.com/QekFXFm2P_iv-U5XcjMpx4z6EAqLKHPsansOvT8u-FU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/MjVERGp5clB0X1VH/TXZqVmdfWThBSGFF/OCZwaWQ9QXBp",
      title: "14 Benefits of Strength Training,Click here to know more",
      long_description:"1. Makes you stronger ,2. Burns calories efficiently , 3. Decreases abdominal fat , 4. Can help you appear leaner ,5. Decreases your risk of falls,6.Lowers your risk of injury, 7.Improves heart health,8.Helps manage your blood sugar levels , 9.Promotes greater mobility and flexibility , 10.Boosts your self-esteem , 11.Makes your bones stronger , 12.Boosts your mood , 13. Improves brain health, 14. Promotes a better quality of life"
      ,description:"1. Makes you stronger ,2. Burns calories efficiently , 3. Decreases abdominal fat , 4. Can help you appear leaner ,5. Decreases your risk of falls,6.Lowers your risk of injury, 7.Improves heart health"
    }
    ,{
      id:57,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/healthy-living/fitness/how-much-exercise-do-i-need-rm-722x406.jpg?w=1110",
      title: "How Much Exercise to become healthy?",
      long_description:"Physical activity is anything that gets your body moving. Each week adults need 150 minutes of moderate-intensity physical activity and 2 days of muscle strengthening activity, according to the current Physical Activity Guidelines for Americans.How many workouts a day is healthy Research studies have proven that a sedentary lifestyle increases the risk of cardiovascular disease and developing a larger waist circumference. By working out twice a day, you are increasing your physical activity, which may also help you maintain a healthy weight and increase your fitness level."
      ,description:"Physical activity is anything that gets your body moving. Each week adults need 150 minutes of moderate-intensity physical activity and 2 days of muscle strengthening activity"
    }
    ,{
      id:58,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/tips-for-exercising-outdoors-in-the-winter-alt-1440x810.jpg?w=1110",
      title: "13 Winter Workout Tips for Exercising Outdoors ",
      long_description:"1. Dress ‘Dry,’ Not Just ‘Warm’ ,2. Layer Up ,3. Opt for Bright Colors, 4. Protect Your Extremities ,5. Protect Your Skin ,6. Check Your Traction, 7. Do a Warm-Up First,8. Breathe Right ,9. Remove Layers as You Heat Up ,10. Drink Up ,11. Head Into the Wind — to Start ,12. Cool Down and Then Change Out of Damp Gear ,13. Avoid Certain Conditions"
      ,description:"1. Dress ‘Dry,’ Not Just ‘Warm’ ,2. Layer Up ,3. Opt for Bright Colors, 4. Protect Your Extremities ,5. Protect Your Skin ,6. Check Your Traction, 7. Do a Warm-Up First,8. Breathe Right ,9. Remove Layers as You Heat Up ,10. Drink Up ,11. Head Into the Wind — to Start ,12. Cool Down and Then Change Out of Damp Gear ,13. Avoid Certain Conditions"
    }
    ,{
      id:59,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/ehfc-exercise-guide-recovery-1440x810.jpg?w=1110",
      title: " How to Let Your Muscles Heal and Why",
      long_description:"The damage that exercise causes triggers your body’s immune system to repair that damage, explains Adam Rivadeneyra, MD, a sports medicine physician with the Hoag Orthopedic Institute and the Orthopaedic Specialty Institute in Orange, California. And when your body’s tissues — from your muscles and bones to heart and lungs — recover, they become slightly fitter than they were before. That way, the next time you perform the same workout, you won’t suffer as much damage."
      ,description:"The damage that exercise causes triggers your body’s immune system to repair that damage, explains Adam Rivadeneyra, MD, a sports medicine physician with the Hoag Orthopedic Institute and the Orthopaedic Specialty Institute in Orange, California. "
    }
    ,{
      id:60,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/heart-health/heart-disease/heart-disease-exercise-722x406.jpg?w=1110 ",
      title: "Why Exercise Is Good for Your Heart",
      long_description:"Regardless of your age, weight, or physical abilities, aerobic exercise is important for your health. It improves circulation, lowers blood pressure and cholesterol, manages weight, and reduces the risk of type 2 diabetes. All of these factors lower the risk of heart disease. Additional benefits of aerobic activity include increased stamina, a stronger immune system, improved mood, and keeping you active and independent as you age. For optimal heart health, get at least 150 minutes of moderate-intensity aerobic activity or at least 75 minutes of vigorous aerobic activity per week."
      ,description:"Regardless of your age, weight, or physical abilities, aerobic exercise is important for your health. It improves circulation, lowers blood pressure and cholesterol, manages weight, and reduces the risk of type 2 diabetes. "
    }
    ,{
      id:61,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/emotional-health/stress/all-about-stress-and-your-diet-how-it-impacts-what-you-eat-how-to-manage-stress-and-foods-to-eat-when-stressed-722x406.jpg?w=284",
      title: "What Is Intermittent Fasting?",
      long_description:"With intermittent fasting, you only eat during a specific time. Research shows fasting for a certain number of hours each day or eating just one meal a couple days a week may have health benefits.Johns Hopkins neuroscientist Mark Mattson has studied intermittent fasting for 25 years. He says our bodies have evolved to be able to go without food for many hours, or even several days or longer.",
      description:"Unlike some other diets, intermittent fasting doesn’t have a long list of rules. Instead, the approach is all about “entirely or partially restraining or abstaining from eating during a specific period of time"
    }
    ,{
      id:62,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/which-is-healthiest-almonds-walnuts-or-pistachios-1440x810.jpg?w=1110",
      title: "Almonds, Walnuts, or Pistachios: Which Is the Healthiest Nut?",
      long_description:"Nuts are a health food that’s often overlooked, despite being a staple of the human diet since hunter-gatherer days. Nuts have been shown to improve overall health when eaten regularly, according to the Cleveland Clinic, and they appear to reduce the risk of several chronic diseases. A study published in Nutrition, Metabolism, and Cardiovascular Diseases in July 2022 found that participants who ate nuts, especially walnuts, had better health markers, including lower BMI and waist circumference, and lower blood pressure, triglycerides, and fasting blood sugar.",
      description:"Nuts are a health food that’s often overlooked, despite being a staple of the human diet since hunter-gatherer days."
    }
    ,{
      id:63,
      cat: 'Food',
      image:"https://media.cnn.com/api/v1/images/stellar/prod/170302114154-masala-dosa.jpg?q=w_2592,h_1944,x_0,y_0,c_fill/w_1280",
      title: "Masala dosa, India",
      long_description:"This classic Masala dosa recipe makes perfectly light, soft and crispy crepes stuffed with a savory, wonderfully spiced potato and onion filling. It might take a bit of time to make delicious hotel style masala dosa, but with my step-by-step instructions and photos I promise it will be easier than you think and is so worth the effort! Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter. The dosa are gluten-free and dairy-free, with a sturdy yet soft texture that’s great for holding a hearty homemade potato filling.",
      description:"A crispy, rice-batter crepe encases a spicy mix of mashed potato, which is then dipped in coconut chutney, pickles, tomato-and-lentil-based sauces and other condiments. "
    }
    ,{
      id:64,
      cat: 'Food',
      image:"https://www.thespruceeats.com/thmb/T_R22QniykdQ9aPCLKIk-O22Gh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
      title: "Steamed Momos",
      long_description:"Momo is a type of steamed filled dumpling with origins from the Himalayan region that is popular in Tibet, Bhutan, Nepal and India.[1][2] [3] [4] In Nepal, where it is considered a national dish, they are usually served with a sauce known as achar influenced by the spices and herbs used within many South Asian cuisines.[5] It can also be cooked as soup versions known as jhol momo where the broth is made from achar using a mixture of tomatoes, sesame seeds, chillies, cumin and coriander or mokthuk from boiling pork/buffalo bones mixing with various herbs and vegetables.",
      description:"Steamed momos are meat filled dumplings from the east Indian state of Sikkim. You can fill them with any minced meat of your choice. These dumplings are usually served with fiery tomato chutney and a clear soup called thukpa."
    }
    ,{
      id:65,
      cat: 'Food',
      image:"https://media.cnn.com/api/v1/images/stellar/prod/170302144617-maple-syrup.jpg?q=w_3216,h_2136,x_0,y_0,c_fill/w_1280 ",
      title: "Maple syrup",
      long_description:"Pure maple syrup is made by concentrating the slightly sweet sap of the sugar maple tree. The basics needed for making maple syrup therefore are some sugar maple trees and a method of concentrating the sap into syrup. As winter comes to an end, usually in late February or early March, sugarmakers prepare for their annual harvest of the maple trees. The group of maple trees that is used is called a sugarbush, or maple orchard. The sugarmaker prepares his or her sugarbush by clearing access roads in the snow, removing fallen branches, and setting up buckets or sap tubing systems. Whether they use tubing or buckets, sugarmakers must be sure that all their sap gathering, collecting, evaporating, and bottling equipment is absolutely clean and in good condition before the beginning of the season.",
      description:"Ever tried eating a pancake without maple syrup? It’s like eating a slice of cardboard. Poorly prepared cardboard. In fact, Canada’s gift to parents everywhere"
    }
    ,{
      id:66,
      cat: 'Food',
      image:"https://media.cnn.com/api/v1/images/stellar/prod/170203151539-fajitas.jpg?q=w_1024,h_683,x_0,y_0,c_fill/w_1280",
      title: "Fajitas",
      long_description:"Fajita is a Tex-Mex, Texan-Mexican American or Tejano, diminutive term for little strips of meat cut from the beef skirt, the most common cut used to make fajitas.[3] The word fajita is not known to have appeared in print until 1971, according to the Oxford English Dictionary. (The word faja is Spanish for strip, or belt, from the Latin fascia, band[6]) Although fajita originally referred to these strips of beef skirt, fajitas now are made with a variety of fillings, including vegetarian options such as green/red/yellow peppers, onions, chilies, and jalapeño peppers.[7]",
      description:"Step 1: Behold the meat sizzling on a fiery griddle. Step 2: Along with the meat, throw side servings of capsicum, onion, guacamole, sour cream and salsa into a warm, flour tortilla. Step 3: Promise all within hearing range that you’ll have “just one more.” Step 4: Repeat."
    }
    ,{
      id:67,
      cat: 'Food',
      image:"https://media.cnn.com/api/v1/images/stellar/prod/170228165934-donuts.jpg?q=w_4026,h_2684,x_0,y_0,c_fill/w_1280",
      title: "Donuts",
      long_description:"These all-American fried wheels of dough need no introduction, but we will say one thing: the delicious guilt of snacking on these addictive calorie bombs makes them taste even better. If that’s possible. Doughnut, also spelled donut, a small ring of sweet leavened dough that has been fried or sometimes baked. The term doughnut may also be used more broadly to refer to foods such as long johns, pączki, bear claws, crullers, and others that resemble doughnuts in form or composition—i.e., are either ring-shaped or composed of fried dough or both.",
      description:"These all-American fried wheels of dough need no introduction, but we will say one thing: the delicious guilt of snacking on these addictive calorie bombs makes them taste even better."
    }
    ,{
      id:68,
      cat: 'Food',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxebLeIa3SLQTpuZ81b4d-jcGsspz4TPGjVg&usqp=CAU",
      title: "Ice cream",
      long_description:"You may have just gorged yourself to eruption point, but somehow there’s always room for a tooth-rotting pile of ice cream with nuts, marshmallows and chocolate sauce.Ice cream is a frozen dessert typically made from milk or cream that has been flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit, such as strawberries or peaches. Food colouring is sometimes added in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and prevent detectable ice crystals from forming. It can also be made by whisking a flavoured cream base and liquid nitrogen together.",
      description:"You may have just gorged yourself to eruption point, but somehow there’s always room for a tooth-rotting pile of ice cream with nuts, marshmallows and chocolate sauce."
    }
    ,{
      id:69,
      cat: 'Food',
      image:"https://b3067249.smushcdn.com/3067249/wp-content/uploads/2023/03/chicken-Biryani-1536x864.jpg?lossy=0&strip=1&webp=1",
      title: "Homemade Spicy Chicken Biryani",
      long_description:"The chicken is marinated in this spice mix, which infuses the meat with its rich and complex flavours. The rice used in Biryani is equally important, with long-grain basmati rice being the preferred variety due to its light and fluffy texture that pairs perfectly with the spiced chicken. To prepare chicken Biryani, the chicken is first cooked in a pot with a variety of aromatic ingredients such as onions, garlic, and ginger. Once the chicken is cooked through, it is layered on top of the rice in a large pot or Dutch oven, and the whole thing is baked in the oven or cooked on the stovetop until the rice is perfectly cooked and the flavors have melded together. The final result is a flavorful and aromatic dish that is sure to impress even the most discerning foodies..",
      description:" Chicken Biryani, is a classic Indian dish that has captured the hearts and taste buds of food lovers around the world."
    }
    ,{
      id:70,
      cat: 'Food',
      image:"https://cdn.tasteatlas.com//images/dishes/ceff65c140064d6285fc3814534a349b.jpg?w=905&h=510",
      title: "Shahi paneer",
      long_description:"Originating from India's Moghul cuisine, shahi paneer is a cheese curry that is prepared with paneer cheese, onions, almond paste, and a rich, spicy tomato-cream sauce. The dish is typically accompanied by Indian breads such as naan, roti, or puri. Luxurious, rich and flavourful are the words that come to mind when we think of shahi paneer. Velvety smooth gravy, soft cubes of paneer and a tonne of flavour make this dish truly royal. Serve it with some butter naan or rice for a finger-licking, wholesome meal.",
      description:"Originating from India's Moghul cuisine, shahi paneer is a cheese curry that is prepared with paneer cheese, onions, almond paste, and a rich, spicy tomato-cream sauce. "
    }
    ,{
      id:71,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/healthy-portable-foods-for-your-next-camping-trip-intro-1440x810.jpg?w=768",
      title: "10 Portable Foods for Your Next Camping Trip",
      long_description:"1. Dried Oatmeal Packets Offer Healthy Carbs. 2.Peanut Butter Pouches Give You Nutrients on the Go . 3.Tuna or Chicken Packets Provide a Quick Protein Boost. 4.Protein Powder Can Balance Your Meals With a Plant-Based Option.5.Dried Fruit Is a Portable, Quick Source of Energy. 6.Shelled Pumpkin or Sunflower Seeds Offer Healthy Fat. 7.Granola or Energy Bars Offer Convenient, Portable Energy. 8.Electrolyte Tablets Can Help You Stay Hydrated. 9.Fiber-Filled, Precooked Quinoa Quick-Prep Grains Make Meal Prep a Cinch .10.Dark Chocolate Offers a Campsite Treat     "
      ,description:"1. Dried Oatmeal . 2.Peanut Butter . 3.Tuna or Chicken Packets . 4.Protein Powder .5.Dried Fruit . 6.Shelled Pumpkin or Sunflower Seeds  7.Granola or Energy Bars  8.Electrolyte Tablets   "
    }
    ,{
      id:72,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/diet-nutrition/popular-low-carb-diets-and-their-pros-and-cons-722x406.jpg?w=1110 ",
      title: "12 Popular Low-Carb Diets",
      long_description:"1. A Basic Low-Carb Diet. 2. The Ketogenic, or ‘Keto,’ Diet. 3. A Low-Carb, High-Fat Diet. 4. The Atkins Diet. 5. Modified Atkins, Modified Keto Diet. 6. Low-Carb Paleo. 7. Whole30. 8. Low-Carb Mediterranean Diet, 9. Dukan Diet. 10. The South Beach Diet. 11. Carb Cycling. 12. Zero-Carb Diet"
      ,description:"1 Low-Carb Diet. 2. The Ketogenic Diet. 3. A Low-Carb, High-Fat Diet. 4. The Atkins Diet. 5. Modified Atkins, Modified Keto Diet. 6. Low-Carb Paleo. 7. Whole30. 8. Low-Carb Mediterranean Diet"
    }
    ,{
      id:73,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/high-sodium-foods-to-avoid-00-intro-alt-1440x810.jpg?w=768",
      title: "10 Sneaky Sodium Bombs",
      long_description:"1.Deli Meats Are Doused in Sodium. 2.Your Breakfast Cereal Might Be Seriously Salty . 3.Vegetable Juice Can Be a Liquid Salt Mine. 4.Canned Soups and Vegetables Contain Untold Salt — and Are Still Bland. 5.Flavor Packets and Condiments Are Teeming With Salt. 6.Frozen Meals Can Be Freakishly Salty. 7.Spaghetti Sauce Is Sneaky Salty. 8.Bread and Tortillas Bristle With the Briny Stuff. 9.Your Dairy Might Dance in Salt. 10.Some Seafoods Are Saturated With Sodium."
      ,description:"1.Deli Meats . 2.Cereal . 3.Vegetable Juice. 4.Canned Soups and Vegetables  5.Flavor Packets and Condiments . 6.Frozen Meals  7.Spaghetti Sauce . 8.Bread and Tortillas. 9. Dairy Products. 10. Seafoods "
    }
    
    ,{
      id:74,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/diet-nutrition/going-vegetarian-benefits-risks-sample-menu-722x406.jpg?w=1110 ",
      title: "A Detailed Guide for Vegetarian Diet",
      long_description:"Someone following a vegetarian diet eats meals focused on plants, including nuts, seeds, grains, vegetables, fruits, and legumes.right up arrow There are many different types of vegetarians, but the most traditional definition is someone who doesn’t eat meat. Types of Vegetarian Diets: 1.Lacto-ovo-vegetarians eat both eggs and dairy but no meat, poultry, or fish. 2.Lacto-vegetarians eat dairy products but no eggs, meat, poultry, or fish. 3.Ovo-vegetarians eat eggs but no dairy, meat, poultry, or fish. 4.Pescatarians eat fish but no meat or poultry.5.Semivegetarians don’t eat red meat but do eat chicken and fish. 6.Flexitarians stick to a vegetarian diet most of the time but eat meat, poultry, or fish on occasion. 7.Vegans, the strictest type of vegetarian, refrain from all animal products and animal byproducts, including dairy, eggs, honey, and things made with gelatin."
      ,description:"Someone following a vegetarian diet eats meals focused on plants, including nuts, seeds, grains, vegetables, fruits, and legumes.right up arrow There are many different types of vegetarians, but the most traditional definition is someone who doesn’t eat meat. "
    }
    ,{
      id:75,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/what-is-the-dash-diet-1440x810.jpg?w=1110",
      title: " A Guide to Lowering Blood Pressure with Dash Diet",
      long_description:"The DASH diet works by limiting not only sodium but also saturated fat — both of which can be detrimental to heart health, says Kimberley Rose-Francis, RDN, CDCES, a dietitian and diabetes educator in Sebring, Florida. A diet that's heavy in salt can drive up blood pressure, which puts unnecessary strain on the heart muscle, Rose-Francis says. Saturated fat, on the other hand, can increase cholesterol levels. “Cholesterol has the potential of blocking or decreasing the flow of blood to the heart,” Rose-Francis says, adding that restricted blood flow can lead to heart attack and stroke.The DASH diet also works by increasing foods that provide fiber, lean protein, and other nutrients thought to help lower blood pressure.right up arrow. People who want to lower their blood pressure should combine the diet with other healthy lifestyle approaches to manage hypertension, such as getting more exercise, losing weight, cutting back on alcohol consumption, and managing stress levels. Quitting smoking and getting plenty of sleep are also recommended and can improve your overall health"
      ,description:"The DASH diet works by limiting not only sodium but also saturated fat — both of which can be detrimental to heart health, says Kimberley Rose-Francis, RDN, CDCES, a dietitian and diabetes educator in Sebring, Florida. "
    }
    ,{
      id:76,
      cat: 'Bollywood',
      image:"https://www.thewrap.com/wp-content/uploads/2023/06/James-Gunn-DC-Studios-DCU-Blue-Beetle.png",
      title: "Blue Beetle : Plot, Release Date and Reviews",

      long_description:"Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle. Blue Beetle is scheduled for theatrical release in the United States on August 18, 2023.[20] A screening in El Paso is also planned. In the United States and Canada, Blue Beetle is projected to earn $12–17 million in its opening weekend, with a projected domestic total of $27–$55 million."
      ,description:"Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers."
    }
    ,{
      id:77,
      cat: 'Technology',
      image:"data:image/jpeg;base64,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",
      title: "Meta Lowers Minimum Age for Quest Headsets Users",
      long_description:"launched its latest generation mixed reality headset, the Quest 3, earlier this month. The Mark Zuckerberg-led company, which currently dominates the market for Augmented Reality and Virtual Reality devices, is now lowering the minimum age for Meta Quest account users from 13 years to 10 years. With the latest development, parents can set up parent-managed Meta accounts for children aged 10 and 12 years on Meta's Quest 2 and Quest 3 headsets, starting later this year. Meta says it will not show ads to users in this age group. Also, apps that are rated safe for kids will be recommended.."
      ,description:"launched its latest generation mixed reality headset, the Quest 3, earlier this month. The Mark Zuckerberg-led company, which currently dominates the market for Augmented Reality and Virtual Reality devices"
    }
    ,{
      id:78,
      cat: 'Food',
      image:"https://images.everydayhealth.com/images/diet-nutrition/going-vegetarian-benefits-risks-sample-menu-722x406.jpg?w=1110 ",
      title: "A Detailed Guide to Following a Vegetarian Diet",
      long_description:"Vegetarianism isn’t nearly as uncommon as it once was. About 5 percent of American adults stick to this way of eating, and that number is on the rise, with about 23 percent of adults reporting that they’ve eaten less meat over the past 12 months. That’s probably because most experts and health organizations agree that eating more plants is a good thing, no matter how strict a vegetarian diet you follow.right up arrow Interestingly, vegetarians are inclined to live healthy lifestyles even outside of meal time. In general, they exercise more frequently and tend to live longer than nonvegetarians."
      ,description:"Vegetarianism isn’t nearly as uncommon as it once was. About 5 percent of American adults stick to this way of eating, and that number is on the rise, with about 23 percent of adults reporting that they’ve eaten less meat over the past 12 months."
    },{
      id:79,
      cat: 'Fitness',
      image:"https://images.everydayhealth.com/images/heart-health/heart-disease/heart-disease-exercise-722x406.jpg?w=1110 ",
      title: "Why Exercise Is Good for Your Heart",
      long_description:"Regardless of your age, weight, or physical abilities, aerobic exercise is important for your health. It improves circulation, lowers blood pressure and cholesterol, manages weight, and reduces the risk of type 2 diabetes. All of these factors lower the risk of heart disease. Additional benefits of aerobic activity include increased stamina, a stronger immune system, improved mood, and keeping you active and independent as you age. For optimal heart health, get at least 150 minutes of moderate-intensity aerobic activity or at least 75 minutes of vigorous aerobic activity per week."
      ,description:"Regardless of your age, weight, or physical abilities, aerobic exercise is important for your health. It improves circulation, lowers blood pressure and cholesterol, manages weight, and reduces the risk of type 2 diabetes. "
    }
  ]);

  return (
    <Store.Provider value={[data, setData]}>{props.children}</Store.Provider>
  );
};

export default DataStore;
