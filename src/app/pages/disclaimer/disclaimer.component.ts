import { Component } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css'],
})
export class DisclaimerComponent {
  titlesArr: string[] = [
    'Educational Purpose Disclaimer',
    'Risk Acknowledgement',
    'Simulation and Hypothetical Performance Notice',
    'Testimonials and Endorsements',
    'Non-Advisory Declaration',
    'User Responsibility and Decision-Making',
    'Intellectual Property Rights',
    'Third-Party Links and Content',
    'Limitation of Liability',
    'User Conduct and Obligations',
    'Updates and Amendments',
    'Contact Information',
    'Data Usage and Privacy',
    'TradingView Disclosure',
  ];

  textsArr: string[] = [
    'The content and tools on Onchart.ai are designed strictly for educational purposes and are not to be misconstrued as financial guidance. Decisions involving investments and trading should be made in consultation with qualified financial experts, and any information provided here should not serve as a basis for such decisions. ',
    'Trading in financial markets involves significant risk, and a majority of individual traders face financial losses. Our content, created for demonstrative purposes, comprises hypothetical scenarios and should not be interpreted as financial advice. Trading decisions should reflect an understanding of the risks involved and be informed by personal financial circumstances.',
    'Performance results from hypothetical or simulated scenarios are inherently limited and do not correspond to actual trading activities. These simulated results are crafted with hindsight and do not account for real-world factors like market liquidity. Thus, they should not be considered indicative of actual trading outcomes.',
    'The experiences shared in testimonials on our website may not be indicative of the results other users may achieve. Trading outcomes can vary widely due to numerous factors, including individual skill and market conditions. We do not claim these experiences to be typical for all users.',
    'Onchart.ai is not a registered investment advisory entity. We operate under the "publisher’s exclusion" and do not offer personalized investment advice. The information on our platform is of a general nature and is not tailored to individual investment requirements.',
    'All information and tools provided by Onchart.ai are for informational and educational purposes and should not be the sole basis for investment decisions. Users should exercise their judgment and bear sole responsibility for their investment actions.',
    'The content, tools, and materials on Onchart.ai are the property of the company and are protected under intellectual property laws. Unauthorized use or reproduction of any material on the site is strictly prohibited.',
    'Onchart.ai may contain links to external websites or incorporate third-party content. We are not responsible for the content or practices of these external sites and advise users to review their terms and policies.',
    'Onchart.ai and its affiliates shall not be liable for any inaccuracies, delays, or failures in the content and information provided, except as required by law.',
    'Users are expected to use Onchart.ai responsibly and ethically, respecting the intellectual property rights and privacy of others, and refraining from any form of misuse of the services offered.',
    'This disclaimer may be updated or amended periodically. Continued use of Onchart.ai signifies acceptance of these changes.',
    'For any queries related to this disclaimer or legal concerns, please contact us at legal@onchart.ai .',
    'We are committed to protecting the privacy and security of user data. Details of data collection, usage, and protection are outlined in our Privacy Policy.',
    'Charts and tools used on this site are based on TradingView technology. Onchart.ai is not affiliated with TradingView, and their use does not imply endorsement by TradingView.',
  ];
}
