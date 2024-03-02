import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADIyMjZ2dkjIyMeHh4/Pz/Pz8/c3Ny9vb0uLi7n5+f5+fkqKiqpqanu7u5sbGyCgoIYGBi1tbU0NDQMDAyioqJ8fHycnJxGRkZmZmZOTk46OjqKiopeXl6VlZVYZr55AAACkElEQVR4nO3c2ZaiMBCAYQaw44Is4gINyvu/Zes4znEuyHLmolL4f09QdQKhklRIEgAAAAAAAAAAAERgl6URy3b+mRSbru7zVbTyvu42hV8uptn+it6+MT65lL10oH760p1Ld5CO0tehc47LSTpGfyfH2KRf0hGG+EptuRRX6fjCXG1zWrqSDi/MyjI0xVk6ulDn+aHZfUsHF+p7vhbI9tLBhdpns8kY6djCzdcBJCNrPplFvTOLms2KTjq4UJ2lBEjVlMxPB1txVjXS4YVpKksyidFVNTtWm62iCS13rTWLs5rV2clSZb6y2UgH6ctrg6ZS8bW5Wd/993QukU/Rh0vANuD9aVtHzHMDEAAAAAAAAMC8IttELAvZBUzrYTxuo3Uch9raz/RmNypoB1qNXrvNapqBzu5cFHWcXZ3jEvlhxruDY2yWdEC7qKNz2hol0dYYK9oao/UhyWQKLs78a2tpa6ylgwtVW9oa9X1nZnO5VwDK5ua9rThb1JWTxCi5cPbUO9oaS03rGecVukk6RH+TK5ckaY/SQfo5tu5c7l+b2ygdqNt48+0FNNd66L+i1Q/11ev+7B/F2kjfxp5n6GsEAAAAAAAA/l9lIuZ74fyhMNGfbdbGb1OzWA/SofoYfPZoq1I6TF+l82mrJj3/0Jhc2ZSKOs5Wrr81Kjk2ezpau5uri3R8YS7Wtkbp6ELZ2hqX9Bet3U06uFCWY9oslw4uVE5bY6w+JJlM1Sfz4VPaGhM1FfOLrTpLlc3Nua04KxR1mz1M1gVapmKV+TLMv/6/tZrWM872uVLNa+P88+RjbJQ8aYNXW2M2aWhrnBzvy1+mbYZ9Hq390LQhbY3VOovYOmRLEwAAAAAAAAAAIC4/L/Rkj2ChKHIAAAAASUVORK5CYII="
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 mx-20 px-10">
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full" />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
