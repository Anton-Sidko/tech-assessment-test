import SubscribeForm from './SubscribeForm.component';
import './SubscribeFormWrapper.styles.scss';

const SubscribeFormWrapper = function () {
  return (
    <div className="subscribe-form-wrapper">
      <h4 className="info-block-title">Join Our Newsletter</h4>
      <SubscribeForm />
      <span className="form-descr">
        * Will send you weekly updates for your better tool management.
      </span>
    </div>
  );
};

export default SubscribeFormWrapper;
