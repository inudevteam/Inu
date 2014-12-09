<div class="posts form">
<?php echo $this->Form->create('Post');?>
	<fieldset>
 		<legend><?php printf(__('Edit %s', true), __('Post', true)); ?></legend>
	<?php
		echo $this->Form->input('id');
		echo $this->Form->input('title');
		echo $this->Form->input('body');
	?>
	</fieldset>
<?php echo $this->Form->end(__('Submit', true));?>
</div>
<div class="actions">
	<h3><?php __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('Delete', true), array('action' => 'delete', $this->Form->value('Post.id')), null, sprintf(__('Are you sure you want to delete # %s?', true), $this->Form->value('Post.id'))); ?></li>
		<li><?php echo $this->Html->link(sprintf(__('List %s', true), __('Posts', true)), array('action' => 'index'));?></li>
		<li><?php echo $this->Html->link(sprintf(__('List %s', true), __('Comments', true)), array('controller' => 'comments', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(sprintf(__('New %s', true), __('Comment', true)), array('controller' => 'comments', 'action' => 'add')); ?> </li>
	</ul>
</div>
