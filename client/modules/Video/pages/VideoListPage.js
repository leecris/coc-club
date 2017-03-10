/**
 * Created by Admin on 2/23/2017.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { fetchVideosIfNeeded } from '../../Video/VideoActions';

// Import Selectors
import { getVideos } from '../../Video/VideoReducer';

// Import Components
import VideoItems from '../components/VideoItems'

class VideoListPage extends React.Component {
  constructor(props,context) {
    super(props,context)

    this.isoOptions = {
      itemSelector: '.item-isotope',
      layoutMode: 'masonry',
      initLayout: false
    };
    this.imageLoadedEvent = this.imageLoadedEvent.bind(this);
  }
  componentWillMount() {

  }
  componentDidMount() {
    let cat = this.props.params.category
    this.props.dispatch(fetchVideosIfNeeded({category:cat}));
    this.createIsotopeContainer();
  }
  componentDidUpdate(prevProps) {
    const {numberOfItems,isFetching} = this.props
    let countElems = this.iso.getItemElements().length;
    if (numberOfItems !== 0 && numberOfItems !== countElems) {
      this.iso.reloadItems();
      this.iso.arrange();
    }
  }
  componentWillUnmount() {
    if (this.iso != null) {
      this.iso.destroy();
    }
  }
  createIsotopeContainer() {
    if (this.iso == null) {
      this.iso = new Isotope(document.querySelector('.index-isotope'), this.isoOptions);
      this.bindIsotopeEvent();
      this.imageLoadedEvent();
    }
  }
  imageLoadedEvent() {
    let iso = this.iso;
    $('.index-isotope').imagesLoaded(function(){
      iso.layout();
      // $('.index-isotope .pluto-post-box .post-media-body, .index-isotope .product-media-body').find('.figure-link-w, iframe').slideDown(100, function(){
      //   $isotope_container.isotope('layout');
      //   setTimeout(function(){
      //     $('.index-isotope .pluto-post-box .post-media-body, .index-isotope .product-media-body').find('.figure-link-w, iframe').addClass('os-faded-in');
      //   }, 50);
      // });
    });
  }
  bindIsotopeEvent() {
    this.iso.on('arrangeComplete',function(filteredItems ){
      console.log(filteredItems);
      console.log('arrange completed')
    });
    this.iso.on('layoutComplete',function(laidOutItems){
      console.log(laidOutItems);
      console.log('layout completed')
    });
    this.iso.on( 'removeComplete', function( removedItems ) {
      console.log(removedItems);
      console.log('remove completed')
    });
  }
  render () {
    const { items } = this.props
    return (
      <div className="main-content-m">
        <div className="main-content-i">
          <div className="content side-padded-content">
            <VideoItems items={items}/>
            <div className="isotope-next-params"
                 data-params="paged=2&posts_per_page=14&post_status=publish&category__in=0"
                 data-layout-type="v3"></div>
            <div className="load-more-posts-button-w">
              <a href="#"><i className="os-icon-plus"></i> <span>Load More Posts</span></a>
            </div>

            <div className="pagination-w hide-for-isotope">
              <div className='wp-pagenavi'>
                <span className='pages'>Page 1 of 2</span><span className='current'>1</span><a
                className="page larger"
                href="http://pluto.pinsupreme.com/page/2/">2</a><a
                className="nextpostslink" rel="next"
                href="http://pluto.pinsupreme.com/page/2/">&raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    isFetching: state.video.isFetching,
    lastUpdated: state.video.lastUpdated,
    items: state.video.items,
    numberOfItems: state.video.numberOfItems,
  };
}

VideoListPage.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

VideoListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(VideoListPage);
