<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0,
      },
      `depth-${depth}`,
    ]"
  >
    <p
      v-if="item.path && !item.path.includes('undefined')"
      class="sidebar-heading clickable"
      :class="{
        open,
        active: active,
      }"
      @click="goLink(item.redirect || item.path)"
    >
      <span
        @click.stop="$emit('toggle')"
        v-show="collapsable"
        class="arrow"
        :class="open ? 'down-arrow' : 'right-arrow'"
      >
        <img
          :src="
            require(`@theme/assets/images/arrow-${
              open ? 'down' : 'right'
            }-s-fill.svg`)
          "
        />
      </span>
      <span class="sidebar-heading__title">{{ item.title }}</span>
    </p>

    <p
      v-else
      class="sidebar-heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span
        v-show="collapsable"
        class="arrow"
        :class="open ? 'down-arrow' : 'right-arrow'"
      >
        <img
          :src="
            require(`@theme/assets/images/arrow-${
              open ? 'down' : 'right'
            }-s-fill.svg`)
          "
        />
      </span>
      <span class="sidebar-heading__title">{{ item.title }}</span>
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-if="open || !collapsable"
        class="sidebar-group-items"
        :items="item.children"
        :sidebar-depth="item.sidebarDepth"
        :initial-open-group-index="item.initialOpenGroupIndex"
        :depth="depth + 1"
        :check-index="checkIndex"
      />
    </DropdownTransition>
  </section>
</template>

<script>
import { isActive } from "../util";
import DropdownTransition from "@theme/components/DropdownTransition.vue";

export default {
  name: "SidebarGroup",

  components: {
    DropdownTransition,
  },

  props: ["item", "open", "collapsable", "depth", "index", "checkIndex"],

  // ref: https://vuejs.org/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks =
      require("@theme/components/SidebarLinks.vue").default;
  },

  computed: {
    active() {
      const active = isActive(this.$route, this.item.path);
      if (active) {
        setTimeout(() => {
          this.$eventBus.$emit("onChangeIndex", this.item.dataIndex);
        }, 200);
      }
      return active;
    },
  },

  methods: {
    isActive,
    goLink(path) {
      this.$emit("toggle");
      this.$router.push(path);
    },
  },
};
</script>

<style lang="stylus" scoped>
.sidebar-group
  .sidebar-group
    padding-left 16px
  &:not(.collapsable)
    .sidebar-heading:not(.clickable)
      cursor auto
      color inherit
  // refine styles of nested sidebar groups
  &.is-sub-group
    padding-left 0
    & > .sidebar-heading
      // font-size 14px
      line-height 22px
      font-weight normal
      padding-left 24px
      // &:not(.clickable)
      //   opacity 0.5
    & > .sidebar-group-items
      padding-left 16px
      & > li > .sidebar-link
        // font-size: 14px
        border-left none
  &.depth-2
    & > .sidebar-heading
      border-left none
  // &.depth-2
  //   & > .sidebar-heading
  //     font-weight 500
  // &.depth-1
  //   ul a:not(.active)
  //     opacity 0.5
  &.depth-0
    a
      color #4E5969
.sidebar-heading
  position relative
  // color $textColor
  color #4E5969
  transition color .15s ease
  cursor pointer
  // font-size 14px
  // text-transform uppercase
  line-height: 22px
  padding 10px 1rem 10px 24px
  width 100%
  box-sizing border-box
  margin 0
  // white-space nowrap
  // overflow hidden
  // text-overflow ellipsis
  // &.open, &:hover
  //   color inherit
  &:hover
    color $accentColor
  .arrow
    position absolute
    top: 12px;
    // transform: translateY(-50%);
    left 4px
    display inline-block
    width 16px
    height 16px
    img {
      width 100%
    }
  &.clickable
    &.active
      font-weight 500
      color $accentColor !important
    // &:hover
    //   color $accentColor

.sidebar-group-items
  transition height .1s ease-out
  font-size 1em
  overflow hidden
@media (max-width: $MQMobile)
  .sidebar-heading:hover, a.sidebar-link:hover
      color #4E5969 !important
@media (min-width: $MQMobile)
  a.sidebar-link:hover, .sidebar-heading:hover
    color $accentColor !important
</style>
