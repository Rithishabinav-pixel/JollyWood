"use client"

import React, { useEffect, useState } from 'react'
import style from '@/app/(site)/components/ui/contentList.module.css'
import '../innerpage.css'
import Image from 'next/image'



// terms data
const TermsConditionsData = [
  {
    title: "Ownership and Registered Office",
    content:
      "This Website (www.jollywood.co.in) is owned and registered by Jollywood Studios & Adventure, a company incorporated under the provisions of the Indian Companies Act, 1956. Our registered office is located at ..",
    listContent: "",
  },
  {
    title: "Website Information",
    content:
      "All information available on the Website is provided for informational purposes only. The information on this Website pertains to the facilities and activities at Jollywood Studios & Adventure. Users are responsible for using any services provided on the Website in accordance with the rules, guidelines, policies, terms, and conditions applicable to such services. Certain information on the Website may be incorrect, and we do not provide any guarantee as to its correctness. We reserve the right to modify the information on the Website at any time. Users are advised to check these Terms of Use periodically for any changes. Continued use of the Website implies acceptance of the changes. We grant users a personal, non-exclusive, non-transferable, and limited right to use the Website.",
    listContent: "",
  },
  {
    title: "Membership Eligibility",
    content:
      "By using the Website, you represent that you have the legal capacity to form binding contracts under the Indian Contract Act, 1872. Minors (below 18 years of age) are not eligible to register or transact on the Website. We encourage parents and guardians to supervise minors' online activities on our Website.",
    listContent: "",
  },
  {
    title: "User Responsibility",
    content:
      "Users are responsible for maintaining the confidentiality of their User ID, password, and transaction ID. Users agree to provide accurate and current information as required by Jollywood Studios & Adventure. We reserve the right to suspend, terminate, or block access to the Website if we suspect any information provided by the user is untrue, inaccurate, or incomplete. Users must not engage in any activities that violate these Terms of Use or applicable laws.",
    listContent: "",
  },
  {
    title: "Electronic Communications",
    content:
      "By using the Website, you consent to receive communications from Jollywood Studios & Adventure electronically. We may communicate with you via email or other electronic means as deemed appropriate.",
    listContent: "",
  },
  {
    title: "Use of Website",
    content:
      "The User agrees, undertakes and confirms that his use of Website and information published by him, if any, must not:",
    listContent: [
      "belong to another person and to which he does not have any right to.",
      "be grossly harmful, harassing, blasphemous, immoral, unethical, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another’s privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; or unlawfully threatening or unlawfully harassing including but not limited to \"indecent representation of women\" within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986.",
      "be misleading in any way.",
      "be patently offensive to the online community, such as sexually explicit content, or content that promotes obscenity, paedophilia, racism, bigotry, hatred or physical harm of any kind against any group or individual.",
      "harass or advocate harassment of another person.",
      "involve the transmission of \"junk mail,\" \"chain letters,\" or unsolicited mass mailing, \"phishing\" or \"spamming\".",
      "promote illegal activities or conduct that is abusive, threatening, obscene, defamatory or libellous;",
      "infringe upon or violate any third party’s rights [including, but not limited to, intellectual property rights, rights of privacy (including unauthorized disclosure of a person's name, e-mail address, postal address or phone number) or rights of publicity];",
      "promote an illegal or unauthorized copy of another person’s copyrighted work (see \"Copyright complaint\" below for instructions on how to lodge a complaint on unauthorised use of copyrighted material), such as providing pirated computer programs or links to them, providing information to circumvent manufacture-installed copy-protect devices, or providing pirated music or links to pirated music files;",
      "contain restricted or password-only access pages, or hidden pages or images (those not linked to or from another accessible page);",
      "provide material that exploits people in a sexual, violent or otherwise inappropriate manner or solicits personal information from anyone;",
      "provide instructional information about illegal activities such as making or buying illegal weapons, violating someone’s privacy, or providing or creating computer viruses;",
      "contain video, photographs, or images of another person (with a minor or an adult) which are offensive in any way;",
      "try to gain unauthorized access or exceed the scope of authorized access to the Website or to profiles, blogs, communities, account information, bulletins, friend request, or other areas of the Website or solicits passwords or personal identifying information for commercial or unlawful purposes from other users;",
      "solicit gambling or engage in any gambling activity which Jollywood Studios & Adventures, in its sole discretion, believes is or could be construed as being illegal;",
      "infringe any patent, trademark, copyright or other proprietary rights or third party’s trade secrets or rights of publicity or privacy or shall not be fraudulent or involve the sale of counterfeit or stolen items;",
      "threaten the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.",
      "create liability for us or cause us to lose (in whole or in part) the services of internet service providers (ISPs) or other suppliers.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All information on the Website, including trademarks, copyrights, text, graphics, logos, and design, is the property of Jollywood Studios & Adventure. No part of the Website or its content may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed without our express prior written consent.",
    listContent: "",
  },
  {
    title: "Other Businesses",
    content:
      "Jollywood Studios & Adventure disclaims any liability for the actions, products, information, and services provided by third-party websites linked to our Website. We do not endorse or warrant the offerings or content of these third-party websites.",
    listContent: "",
  },
  {
    title: "Privacy",
    content:
      "Jollywood Studios & Adventure understands the privacy concerns of the User, and the protection of personal information is of utmost priority. We store and secure all personal information collected in accordance with applicable laws and regulations. Our current Privacy Policy is available at {link} If you object to the transfer or use of your information as described in our Privacy Policy, we advise you not to use this Website.",
    listContent: "",
  },
  {
    title: "Disclaimer of Warranties and Liability",
    content:
      'The materials on this website are provided on an "AS IS" basis and without warranties of any kind, either express or implied. Jollywood Studios & Adventure disclaims all warranties, express or implied, including but not limited to implied warranties of non-infringement, merchantability, and fitness for a particular purpose. While we have implemented security measures and technological precautions, we do not warrant that the functions contained in the materials will be uninterrupted or error-free, that the materials will meet your requirements, that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components. We do not warrant or make any representations regarding the use or the results of the use of the materials on this website in terms of their correctness, accuracy, reliability, or otherwise.',
    listContent: "",
  },
  {
    title: "Disclaimer of Language Translation",
    content:
      "Computerized translations on this website are provided as an approximation of the original content. Jollywood Studios & Adventure does not guarantee the accuracy, reliability, or timeliness of any information in computerized translations. Automated translations are not intended to replace human or traditional translation methods. If any questions arise concerning the accuracy of the information presented by the translated version of the website, the original version takes precedence.",
    listContent: "",
  },
  {
    title: "Personal Details",
    content:
      "When placing an order on the Website, the User must provide a correct postal address, email ID, and valid phone number. By registering with Jollywood Studios & Adventure, the User consents to be contacted via phone calls and/or SMS notifications regarding order, shipment, or delivery updates. We reserve the right to send promotional SMS, emails, and notifications to Users about various offers and activities.",
    listContent: "",
  },
  {
    title: "Services and Payment",
    content:
      "While utilizing any of the payment methods available on the Website, Jollywood Studios & Adventure does not assume responsibility or liability for any loss or damage that may arise directly or indirectly due to the lack of authorization for any transaction, exceeding the preset transaction limit, payment issues, or decline of a transaction for any reason. All payments made on the Website shall only be accepted in Indian Rupees. The User must provide a valid photo ID document when placing an order or accepting delivery to establish ownership and ensure a safe online shopping environment.",
    listContent: "",
  },
  {
    title: "Breach",
    content:
      "In the event of a breach of the Terms of Use, Privacy Policy, or other rules and regulations, Jollywood Studios & Adventure may take actions such as limiting the User's activity, removing their information, warning other Users, temporarily or indefinitely suspending or terminating their membership, blocking access to the Website, and pursuing legal remedies. Jollywood Studios & Adventure reserves the right to reinstate access to suspended Users at its discretion. Users who have been suspended or blocked may not register or attempt to re-register or use the Website until their access is reinstated. Furthermore, Jollywood Studios & Adventure reserves the right to recover any unsettled amounts due from the User and take legal action as necessary.",
    listContent: "",
  },
  {
    title: "Indemnity",
    content:
      "The User shall indemnify and hold harmless Jollywood Studios & Adventure, its affiliates, subsidiaries, and their respective officers, directors, agents, and employees from any claim, demand, action, or penalty imposed by any third party, including reasonable attorneys' fees, arising from the User's breach of these Terms of Use, Privacy Policy, violation of any law, rules or regulations, infringement of third-party rights, or harm caused to other Users.",
    listContent: "",
  },
  {
    title: "Applicable Law",
    content:
      "This Agreement shall be governed by and interpreted and construed in accordance with the laws of India and shall be subject to the exclusive jurisdiction of the courts at Bangalore",
    listContent: "",
  },
  {
    title: "Copyright Complaints",
    content:
      "Jollywood Studios & Adventure respects the intellectual property of others. If the User believes that their work has been copied in a way that constitutes copyright infringement, they may contact us at",
    listContent: "",
  },
  {
    title: "Limitation of Liability",
    content:
      "The use of this website is entirely at the User's own risk. Jollywood Studios & Adventure provides this website and any information and content herein strictly on an \"AS IS\" basis without any express warranties. To the fullest extent permitted by applicable law, Jollywood Studios & Adventure excludes all liability for any direct, indirect, incidental, special, or consequential damages, including damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or inability to use this website, the cost of procurement of substitute goods and/or services, or unauthorized access or alteration of the User's transmissions or data. Jollywood Studios & Adventure is not responsible or liable for any threatening, defamatory, obscene, offensive, or illegal conduct of other Users or any infringement of others' rights, including intellectual property rights, occurring on or through this website. If the User is dissatisfied with the use of this website, the materials available on it, or the terms of use, the User's sole and exclusive remedy is to discontinue using the website. To the extent that any warranty or liability cannot be excluded, Jollywood Studios & Adventure's total liability is limited to the supply of the services/products provided or payment of the cost towards services/products supplied.",
    listContent: "",
  },
  {
    title: "Our Contact",
    content:
      "Vels Studios & Entertainment Pvt Ltd, Plot No 24 & 26, Bidadi Industrial Area, Ramanagara District, Bidadi - 562 109.",
    listContent: "",
  },
];



export default function TermsConditions() {

  

  return (
    <>
    
{/* hero section  */}

<section className={`hero_section ${style.hero_section}`}>
    <div className={`container`}>
        <h1 className={`title common_heading white`}>Terms of Use</h1>
    </div>
</section>


{/* story section  */}
<section className={`common_section no_padding_top ${style.contentList_section}`}>

<div className={`container section_container ${style.container}`}>

   <div className={`top_heading center_align ${style.top_heading}`}>
      <div className={`left ${style.left}`}>
        <p className='white'>Welcome to Jollywood Studios & Adventure! These Terms of Use govern your access and usage of our website (www.jollywood.co.in). By accessing or using our Website, you agree to comply with these Terms of Use. Please read them carefully before using our services.</p>
      </div>
    </div>

  <div className={style.content}>

    {TermsConditionsData && TermsConditionsData.map((item,index)=>(
      <div className={style.card} key={index}>

        <div className={style.detail}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          {item.listContent && 
          <ul>
            {item.listContent.map((list,index)=>(
              <React.Fragment key={index}>
              <li>{list}</li>
              </React.Fragment>
            ))}
          </ul>
          }
        </div>
      </div>
    ))}
   
  </div>

</div>




</section>


    </>
  )
}
