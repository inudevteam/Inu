<?php 

class PostsController extends AppController {
	public $helpers = array ('Html', 'Form');
	
	public function index(){
		$this->set ('posts', $this->Post->find('all'));
		// this is the delete function 
	public function delete($id) {
    if ($this->request->is('get')) {
        throw new MethodNotAllowedException();
    }

    if ($this->Post->delete($id)) {
        $this->Session->setFlash(
            __('The post with id: %s has been deleted.', h($id))
        );
        return $this->redirect(array('action' => 'index'));
    }
}
	}
}
