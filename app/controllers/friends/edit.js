
import FriendsBaseController from './base';

export default FriendsBaseController.extend({
		cancel: function(){
			this.transitionToRoute('friends.show');
			return false;

		}
	
});
