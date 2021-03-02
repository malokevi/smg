const testimonialData = [
    {
        text: 'I am a long time patient of Sleep Management , first on Brant and now at Fairview. If memory serves me correctly a total of seven years.The reason for the note is to let you know my feelings about Tammy as my main contact for related issues and purchasing of supplies. I have a competitor location minutes from my home , but would never consider visiting for any reason. Tammy has in all my dealings handled all my requirements with extreme care and professional manner.Like most customers I can be a pain to deal with at times , but she has show patience and understanding when I present my not so good side. Sleep apnea is a major annoyance , but her understanding of what needs to happen has made the journey much less annoying.You are fortunate to have this quality person on staff for your firm and my gut says there are many more of your customer who feel the same way I do about Tammy.',
        author: 'Gerry Brine,',
        regards: 'Regards,'
    },
    {
        text: 'We would like to extend our sincere gratitude for the amazing service my wife and I receive from your location. Sarah, especially, and others have have incredibly informative and patient in helping us with our equipment. It is outstanding customer service and truly stands out.Again, please extend our gratitude to Sarah and the rest of your amazing staff.',
        author: 'James Bulger and Arleen Wiggin',
        type: 'short',
        regards: 'Kind regards,'
    },
    {
        text :'I am writing you to commend Emily Israel for her wonderful customer service to me since March 2017. I experienced great difficulty and much frustration during the process of trying to choose an effective mask for my severe sleep apnea. Emily always greeted me with a smile and a warm welcome. I never felt pressured to make a decision, she responded to my questions with accuracy and confidence, she provided me with options and ensured me that I was \'normal\'. I recognized and appreciated her knowledge and expertise as a RRT, which gave me significant trust in her, knowing I was dealing with a professional.She was very clear in her delivery of information and techniques and always clarified my understanding before I walked out the door.I will happily refer my friends, colleagues and family, if need be, to Sleep Management Group for expert, expedient, and excellent service on all levels. Emily would be a very competent trainer of new staff if the opportunity presents itself. She clearly enjoys her career choice!Happy Canada Day!',
        author: 'Pat Matthews',
        regards: 'Regards,'
    },
    {
        text: 'My name is Steve Rayment and I\'m a patient/customer at SMG on Speers Road, Oakville.I wanted to share my thoughts regarding the amazing service I\'ve been getting working with Josh. I\'ve had a number (5?) of recent visits trying to resolve my mask leakage. Josh has been amazing - knows my name, always encouraging, always looking for solutions, explains everything so I understand, and so on.I recently asked him if he is a business partner/owner - I don\'t often see that level of service and dedication from employees. So, congratulations to you for hiring and developing such a great employee, and to him for always putting the customer first.',
        author: 'Steve Rayment',
        regards: 'Thanks,'
    },
    {
        text: 'I would like to take a moment to appreciate Ms. Amelia (Im sorry if I got her name wrong) for her outstanding service, patience and demeanor while rendering her duties during my visit to the SMG center on Spears road on the morning of Monday, 17 October.She was very kind, took a lot of questions patiently and always had a smile on her face. I will always recommend SMG to other people simply because of experiences like this.',
        regards: 'Thank you Amelia! Rgds...',
        author: 'Shanat',
        type: 'short'
    },
    {
        text: 'I thought I would write you a short e-mail expressing my satisfaction with the staff at your Burlington site. I needed a loaner machine when my CPAP machine quit and was treated fantastically. I was at the store today to get my new machine and had a great experience, Tammy was a great help and I learned some valuable information. All of the girls were really friendly and made the replacement of my machine as good experience. I always highly recommend the Burlington store when ever I can, they are to be commended.',
        author: 'Tim Scott',
        regards: 'Thank you,',
        type: 'short'
    },
    {
        text: 'Attention: Tammy and colleaguesI received my new machine this morning. I have now tried it out and am looking forward to a great night\'s sleep.',
        regards: 'Thank you all for your continued great service,',
        author: 'Cliff Dakers',
        type: 'short'
    },
    {
        text: 'Just a quick note to say how wonderful the service was that I received in your store today.Your staff were helpful and very friendly. I was pleased that I was treated with respect, professionalism and first class service.Thank you very kindly and I will be returning to your place of business in the future.',
        regards: 'Yours sincerely,',
        author: 'Magi Moodie',
        type: 'short'
    },
    {
        text: 'I hope that this e-mail finds you well.I am writing to express my appreciation and gratitude for the professionalism exhibited by Tammy Durette of Burlington SMG over the past couple of months. During the time I have been dealing with the Burlington Sleep Management Group, I have found Ms. Durette welcoming, knowledgeable and very helpful, especially in assisting me in selecting a CPAP machine that met my needs. She is very thorough in her explanations and she always provided me with the opportunity to ask questions when I wasn\'t sure I understood properly. She also reassured me that we would remain in touch long after my purchase if there were any issues that could surface. In addition, I also found her sense of humour very refreshing and engaging.In my business, all we seem to get is complaints and we can\'t do enough to keep people happy. Whenever we do get a compliment, it\'s special. I just thought you may want to know that you have a gem in Tammy, who I believe brings a special humanity to her position. Well done.By the way, I am pleased with my ResMed machine and I\'ve been averaging over 6 hours of quality sleep in the evenings.',
        regards: 'Regards,',
        author: 'Vince Aresta, Vice-Principal'
    },
    {
        text: 'I just received my CPAP yesterday, to help with my severe sleep disorder, that I was diagnosed with on Monday Dec 3rd. Upon hearing the outcome of needing a machine and mask to sleep, I left the office in tears. But reality and the power of positive lead me to the SMG for my consultation and fitting in Kitchener with group member, Michelle. She was very informative and patient while thoroughly explaining the machine and how to assemble it, as well as the great benefits that can be achieved by its usage. I\'ve only used it one night at home and am totally amazed in the difference it made me feel. I relaxed and mentally accepted the help for my sleep disorder and experience a wonderful, restful, fresh feeling and great night sleep. Thanks to all professionals concerned - especially - Dr. Botros, Sleep Clinic in Kitchener, SMG in Kitchener and my family physician - Dr. Jones - Elmira for their care, concern and expertise to ease the apprehension of patients experiencing a sleep disorder.After one night with machine, I\'ve scheduled my second sleep over at clinic using a machine.My experience- from tears to feeling great in 2 days - can only get better. Power of Positive.',
        author: 'Margaret Steffler'
    },
    {
        text: 'About a year and a half ago, I became quite concerned because I was exhausted all the time and I had difficulties driving 20 minutes home. I thought that it was because I led such a busy life with family and work, but when I started waking up and felt like I could hardly wait to get back home to sleep again, I knew it wasn\'t normal. It was recommended I have a sleep study done.I was diagnosed with mild sleep apnea, although I had most of the symptoms on the "Indications for a Sleep Assessment". I was set up on a CPAP machine and mask and the "adventure" began.I took me about 2 weeks to adjust to wearing a mask every night. At first, I hated the thought of even putting it on, especially in front of my husband, but he was a great support. Every night, I took my mask off at some point throughout the night without even knowing it. I guess my brain had to get used to me wearing a mask as well. I didn\'t really notice a big difference until about a month after wearing it. I began waking up and feeling more refreshed and I was able to drive and wasn\'t worried about falling asleep at the wheel. As time went on, I noticed more benefits. I had more energy, wasn\'t anxious or depressed and was able to fall asleep easily at night and stay asleep. Even after 5 months, I noticed that my memory was improving and I didn\'t have reflux anymore.Now when I think back, I can\'t even imagine how I functioned before CPAP. I never think about sleeping without it and if I go away, it always comes with me.Going through this experience enables me to sympathize with the patients I work with to help them through their CPAP journey.',
        author: 'Donna Marshall-Hare/Sleep Therapeutics'
    },
    {
        text: 'I have been visiting Sleep Management Group in the Oakville location for the past 7 years. Even though I live in Mississauga it is worth the drive to Oakville because of the added customer support you get from Kathy and her team at Sleep Management Group. Kathy is very knowledgeable and supportive. She helped me a lot in getting adjusted but then monitored my results to ensure that I was getting the best results. She cares so much about her clients that she will take time to get to know each and every one of them on a first name basis. Every time I walk in to Sleep Management Group location in Oakville, Kathy and her staff know exactly what I need and within a very short time frame they are able to get everything I need so I can get on with the day. I highly recommend the Oakville location if you are looking for best in class customer support.',
        author: 'Bharat'
    },
    {
        text: 'Just a quick note to let you know how absolutely fabulous it has been for me to have Jennifer guide me through this maze that is Sleep Disorders. Sleep Apnea has been very challenging for me, from figuring out what machines and masks work best to settings that do and don\'t work and everything in between Jennifer has been extremely helpful. She knows her stuff very well but more than that she cares. Because it has not been easy for me to settle in with the machines/masks etc. I ended up sleep deprived and emotionally low, but Jennifer just kept coming up with solutions and kept encouraging me at every turn. She has truly made a difference and I am so grateful to have been able to lean on her every step of the way. She\'s simply the best!',
        regards: 'With thanks,',
        author: 'Johanna'
    },
    {
        text: 'I am one of your new customers; I just received my CPAP. I wanted to let you know how wowed and amazed I was when I visited the SMG Oakville branch thanks to your agent\'s service.Cassandra and Nicole, both were professionals, pleasant with full of knowledge about the CPAP. For a first time I trusted an agent, I didn\'t feel pushed to choose a model. Nicole has explained to me, with patience and a smile, all machines\' cons and pros.Bottom of the line, it\'s one of the best client service I ever had since in Canada.',
        regards: 'Regards,',
        author: 'Zouheir',
        type: 'short'
    },
    {
        text: 'Just want to congratulate you for having a team of very conscientious staff.During the course of purchasing my new CPAP machine, I enjoyed the very high standard of professional assistance from Deborah, Cassandra, Jennifer and especially Jackie. With Jackie\'s in-depth product knowledge and her endless patience, together with your understanding and generosity, a frustrated patient was turned to a satisfied customer. Sleep Management Group is certainly a supplier I will recommend to anybody in need,',
        author: 'Desmond'
    }
]

export default testimonialData