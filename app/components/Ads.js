import React from 'react';

export class AdClass extends React.Component {
  constructor(props){
    super(props);
    const initialAds = [
      { text: 'AD #1', alt: 'Google', url: 'http://www.google.com', img: 'http://placehold.it/600/61a65' },
      { text: 'AD #2', alt: 'Yahoo', url: 'http://www.yahoo.com', img: 'http://placehold.it/600/f9cee5' }
      ];
    this.state = { ads: initialAds };
  }

  componentDidMount() {
    var root = 'http://jsonplaceholder.typicode.com';

    $.ajax({
      url: root + '/photos/1',
      method: 'GET'
    }).then(function(data) {
      console.log(data);
      console.log(data.title);
      var newAd = {text: 'AD #'+data.id, alt: data.title, url: 'http://www.woot.com', img: data.url}
      var newAds = this.state.ads;
      newAds[1] = newAd;
      this.setState({ads: newAds});
    }.bind(this));

  }

	render() {
    const adList = this.state.ads.map((ad, i) =>
      <div key={'ad_' + i} class="well">
        <p><a href={ad.url}><img alt={ad.alt} src={ad.img} width="100" /></a></p>
      </div>
    );

		return (
      <div class="col-sm-2 sidenav">
        {adList}
      </div>

		);
	}
};
