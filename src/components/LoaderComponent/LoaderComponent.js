import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoaderComponent extends React.Component {
    render() {
      const { loading, children } = this.props;
      return (
        <div style={{position: 'relative'}}>
          {loading &&
          <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
            <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, background: '#000', opacity: .2, zIndex: 999}}></div>
            <CircularProgress style={{position: 'absolute',transform: 'translate(-50%, -50%)', top: '50%', left: '50%', zIndex: 99999}} />
          </div>}
          
          {children}
        </div>
      );
    }
}

export { LoaderComponent };
