
import FriendsBaseController from './base';

export default FriendsBaseController.extend({
		cancel: function(){
			this.transitionToRoute('friends.index');
			return false;

		}
	
});
