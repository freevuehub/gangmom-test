<template>
  <div class="comment">
    <h4>총 댓글 수: {{ comments.length }}</h4>
    <ul>
      <li v-for="item in comments" :key="item.id">
        <p v-html="buildHtml(item.body)"></p>
        <div class="writer">
          <p>{{ item.name }}</p>
          <p>
            (
            <a :href="`mailto:${item.email}`">{{ item.email }}</a>
            )
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
  computed: {
    buildHtml() {
      return html => {
        return html.replace(/\n/g, '<br>')
      }
    },
  },
}
</script>

<style lang="scss">
.comment {
  padding: 10px;
  h4 {
    text-align: right;
    font-size: 0.8rem;
    color: #9e9e9e;
  }
  ul {
    li {
      margin-bottom: 30px;
      p {
        font-size: 1rem;
        line-height: 20px;
        color: #4e4e4e;
      }
      .writer {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        p {
          margin-left: 5px;
          font-style: italic;
        }
      }
    }
  }
}
</style>