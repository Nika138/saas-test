import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css'],
})
export class FaqSectionComponent {
  titlesArr: string[] = [
    'How it works?',
    'Do I need to upgrade TradingView to use it?',
    'What markets & timeframes does it work with?',
    'Does it work on MetaTrader 4/5?',
  ];

  textsArr: string[] = [
    'All JS analytics products are exclusively available on Tradingview.com. After making a purchase, you will gain access to the products through invite-only scripts.',
    'NO! You do not need to upgrade your TradingView Account. Our product works on the basic plan of TradingView, which is free.',
    'Our indicators are compatible with any market on TradingView, such as stocks, crypto, forex, commodities, and etc. They work on all timeframes, including 1m, 5m, 30m, 1H, 4H, 1D, etc. The indicators we offer are designed to be flexible and can be used for various trading styles, including scalping, swing trading, investing, and more.',
    'Currently, our indicators and screeners are exclusively compatible with TradingView.com. You can utilize these charts to trade in real-time on any platform.',
  ];
  isClicked: boolean = false;

  toggle() {
    this.isClicked = !this.isClicked;
  }
}
