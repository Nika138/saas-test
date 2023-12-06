import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  titlesArr: string[] = [
    'OnChart.ai - Revolutionizing Trading with Ingenious Technology',
    'Meet Our Founder: Shalva Janashvili',
    'The Birth of OnChart.ai',
    'Our Core Philosophy: Empowering Traders with Technology',
    'Innovating for Your Success',
    'Join Our Community of Forward-Thinking Traders',
  ];

  textsArr: string[] = [
    "Welcome to OnChart.ai, where we blend the precision of engineering with the dynamics of financial markets. Founded by Shalva Janashvili, a seasoned electrical and electronic engineer, our platform is more than just a set of tools—it's the culmination of years of innovation, passion, and a deep understanding of both technology and trading.",
    "Shalva's journey into the world of trading is as unique as it is inspiring. With over five years of experience in the technical aspects of trading and a rich background in electronic engineering, he noticed intriguing parallels between market patterns and phenomena in electronic engineering. This realization sparked an idea that would eventually lead to the creation of OnChart.ai.",
    'The inception of OnChart.ai was not just the start of a company, but the beginning of a mission. Shalva dedicated almost a year to meticulously crafting algorithms that apply advanced electronic engineering techniques to market analysis. His vision was clear: to equip traders with groundbreaking tools that offer a new perspective on technical analysis and market dynamics.',
    'At OnChart.ai, we believe that the key to successful trading lies in understanding the market through the lens of technology. Our platform is designed to help traders, both novice and experienced, gain a deeper, more nuanced understanding of market trends and patterns.',
    "Every feature and tool on OnChart.ai is a testament to our commitment to innovation and excellence. Our team works tirelessly to update and refine our offerings, ensuring that you have access to the most sophisticated, user-friendly tools in the market. We're not just providing technology; we're redefining the way traders interact with the market.",
    "OnChart.ai is more than a platform—it's a community. A community led by a visionary engineer, driven by technology, and dedicated to your success. Join us on this exciting journey and discover how our unique blend of engineering and trading expertise can transform your trading experience.",
  ];
}
