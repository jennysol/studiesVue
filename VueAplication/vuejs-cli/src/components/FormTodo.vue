<template>
  <div clas="form-todo form group">
    <p>
        <input placeholder="name" type="text" name="author" class="form-control" v-model="name"/>
    </p>
    <p>
        <textarea placeholder="Comment" name="message" class="form-control" v-model="message"/>
    </p>
    <button v-on:click="addComment" type="submit" class="btn btn-primary">Comment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      message: '',

    }
  },
  methods: {
    addComment() {
      if (this.message.trim() === ''){
        return alert("Complete all fields");
      }

      // emotir message
      this.$emit('add-todo', {
        name: this.name,
        message: this.message,
      });

      // Clean comment
      this.name = '';
      this.message = '';
    },
    
    // Remove Comment
    removeComment(index) {
      this.comments.splice(index, 1);
    }
  },
}
</script>