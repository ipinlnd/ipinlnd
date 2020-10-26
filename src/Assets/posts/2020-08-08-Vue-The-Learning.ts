export const text = `
# Vue: The learning

Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru. (I just copied this from wikipedia)

In this article, I'll go through creating a Todo application with 3 boards (Todo, Doing and Done).

Note: This article is for those who are already pretty familiar with node.js and javascript frameworks such as React or Angular.

Note2: I will also not go through too much details as to how or why things do other things. For that, you can probably read here [https://vuejs.org](https://vuejs.org)

<img src="/images/vue/demo.gif">

# Getting Started

I'm going to use the vue-cli to create the project. So let's install that globally

\`\`\`
npm install -g @vue/cli
\`\`\`

Now that we've installed it, we can use it to set up the application. I'll use its gui for this. It's much cleaner than the command line program.

\`\`\`
vue ui
\`\`\`

From here, first choose the location you want your project to be in and then click on \`Create a new project here\`

<img height="700px" src="/images/vue/vue-cli-project-manager.jpg">

Input the project name and select a package manager.

<img height="700px" src="/images/vue/vue-cli-create-project.jpg">

You're then asked to choose the features you want to have in your application.

Here's my selection:

- Babel
- TypeScript
- Vuex
- Linter/Formater

<img src="/images/vue/vue-cli-features.jpg">

After setting up the project, wait a little bit as vue tries to install all requirements.

# Introduction

This is how Vue has organized the files:

<img src="/images/vue/file-structure.jpg">

the \`main.ts\` file is our starting point. It creates a \`Vue\` instance, and feeds it the store from Vuex.

\`\`\`
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
\`\`\`

the \`App.vue\` is our main component. It holds the whole application inside it. Currently in the default code, it shows an \`img\` and the \`HelloWorld\` component.

As you see, to render the component, we have a \`template\` tag that includes everything we want to render. We also have the \`style\` tag to write our css classes.

The section inside the \`script\` tag, is where we write our javascript code.
You can see that the \`App\` component, is written in class style. To define a class component, we use \`@Component\` to specify that this class is a component. You can read more about class Components here: [https://class-component.vuejs.org](https://class-component.vuejs.org)

It also registers the \`HelloWorld\` component, because it uses it in its template. To be able to use a component in a template, the component must be registered.

For this example, we're not going to use the \`HelloWorld\` component. So let's remove that. In fact, let's remove everything inside the main div tag. And also let's remove the import for \`HelloWorld\`, its registers and its file.

\`\`\`
<template>
  <div id="app">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>
\`\`\`

# The code

So, let's start writing our own code. Our application, consists of:

- A title header
- 3 columns: Todo, Doing, Done
- Tasks inside the columns
- A create task form
- The ability to drag the tasks and drop them in any of the columns, thus changing their status
- The ability to drag the tasks and drop them inside the tarsh can, thus deleting them

For this structure to work, i'm going to create three main components:

- A Home component which contains the main part of the application
- A Column component for each column
- A Card component for each task

I will add the title header, in our \`App.vue\`. So let's first start with those:

App.vue:
\`\`\`
<template>
  <div id="app">
    <h1 style="margin-bottom: 0;">The Learning</h1>
    <h3 style="margin-top: 0;">Todo Edition</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>

\`\`\`

## Home Component

Now let's create our Home Component.
As our \`Home\` component, is something like a page, i'm going to create it in different directory than \`components\`.
in the \`src\` directory, create another directory and name it \`views\`. Then create a \`Home.vue\` file inside of it.

First, create the three main part:

\`\`\`
<template>
  <div class="home"></div>
</template>

<script lang="ts">

import Vue from 'vue'

export default {
  
}
</script>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>

\`\`\`

And also let's register this component in \`App.vue\`

App.vue:
\`\`\`
@Component({
  components: {
    Home
  }
})
\`\`\`

Now let's add the create form. It's a simple form, containing only an input and a button. But, same as react, we will need states to handle the input. so first let's set up our \`Home\` component with a set of methods:

\`\`\`
<script lang="ts">
import Vue from "vue";

interface Task {
  name: string;
  status: "Todo" | "Doing" | "Done"
}

export default {
  name: "Home",
  data: function() {
    return {
      taskInput: "",
      tasks: [] as Task[]
    }
  },
  methods: {
    onInputChange: function(event: any) {
      this.taskInput = event.target.value;
    },
    onCreate: function(event: any) {
      event.preventDefault();
      this.tasks.push({
        name: this.taskInput,
        status: "Todo"
      })
      this.taskInput = "";
    }
  }
};
</script>
\`\`\`

and now the template:

\`\`\`
<template>
  <div class="home">
    <form class="form" v-on:submit="onCreate">
      <input
        placeholder="Task Name"
        class="input"
        v-bind:value="taskInput"
        v-on:change="onInputChange"
      />
      <button class="add-button">Create a new task</button>
    </form>
  </div>
</template>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.add-button {
  width: 200px;
  height: 50px;
  margin-top: 5px;
  background-color: coral;
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.add-button:hover {
  opacity: 0.6;
}

.form {
  margin-top: 25px;
}

.input {
  margin-right: 20px;
  width: 200px;
  outline: none;
  border: none;
  border-bottom: 1px solid red;
}
</style>
\`\`\`

You can see in the template, attributes such as \`v-bind:value\` or \`v-on:click\`, those will translate to \`value\` and \`onclick\` repsectively, with a slight different that the value of these attributes, are bound to our variables from the component. This is how Vue tells the template on how to look for the variables and the functions from the component. If we simply do \`value=taskInput\`, it won't bind and would just put "taskInput" as the value. 

It should now look something like this:

<img src="/images/vue/1.jpg">

## Column Component

Now let's create our Column Component. Inside the \`components\` directory, create a new file and name it \`Column.vue\`

Our column component recieves 3 props:
  - A \`columnName\` (Todo, Doing or Done)
  - A list of tasks
  - An \`onChange\` function, for when the status of the task changes


  Let's get to it:

\`\`\`
<template>
  <div class="column-container">
    <div class="header">
    <div
      id="cardContainer"
      class="body"
    >
    </div>
  </div>
</template>

<script>

export default {
  name: "Column",
  props: ["columnName", "items", "onChange"],
};
</script>

<style>
.column-container {
  flex: 1;
  margin: 0 2%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  border: 10px solid #394551;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}

.header {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 20px;
  background-color: #394551;
  color: white;
  font-size: 18px;
}

.body {
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

@media screen and (max-width: 700px) {
  .column-container {
    flex: unset;
    height: 150px;
    width: 100%;
    margin: 1% 0;
  }

  .body {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>

\`\`\`

It's pretty straight forward. Now let's use this in our Home component:

first register the component:

\`\`\`
import Column from "@/components/Column.vue";
...
components: {
  Column
},
\`\`\`

And then let's add it to our template:
\`\`\`
<template>
  <div class="home">
    <div class="main">
      <Column
        columnName="Todo"
        v-bind:items="
          tasks.filter((x) => x.status === 'Todo').map((x) => x.name)
        "
        v-bind:onChange="onChange"
      />
      <Column
        columnName="Doing"
        v-bind:items="
          tasks.filter((x) => x.status === 'Doing').map((x) => x.name)
        "
        v-bind:onChange="onChange"
      />
      <Column
        columnName="Done"
        v-bind:items="
          tasks.filter((x) => x.status === 'Done').map((x) => x.name)
        "
        v-bind:onChange="onChange"
      />
    </div>
    <form class="form" v-on:submit="onCreate">
      <input
        placeholder="Task Name"
        class="input"
        v-bind:value="taskInput"
        v-on:change="onInputChange"
      />
      <button class="add-button">Create a new task</button>
    </form>
  </div>
</template>
<style>
...
.main {
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

@media screen and (max-width: 700px) {
  .main {
    flex-direction: column;
  }
}
</style>
\`\`\`

Also add the onChange function to the methods:

\`\`\`
onChange: function(data: string, column: "Todo" | "Doing" | "Done") {
  const ind = this.tasks.findIndex(x => x.name === data);
  if (ind >= 0) {
    this.tasks[ind].status = column;
  }
},
\`\`\`

We'll get to it later.

The app should now look like this:

<img src="/images/vue/2.jpg">

## Card
And now our final component, the Cards. 

In the same directory, create a file named \`Card.vue\`
Simply copy and paste the following inside it:

\`\`\`
<template>
  <div
    draggable="true"
    class="card-container"
    v-bind:id="item"
  >
  </div>
  </template>


<script>
import store from "@/store";
export default {
  name: "Card",
  props: ["item"],
};
</script>

<style>
.card-container {
  width: 95%;
  height: 50px;
  background-color: silver;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid silver;
  box-shadow: 0 2px 5px 0 gray;
  margin: 2% 0;
  cursor: move;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 700px) {
  .card-container {
    min-width: 100px;
    width: 100px;
    margin: 0 5%;
    height: 80%;
  }
}
</style>
\`\`\`

And in the \`Column.vu\`, first register it on your own and then add it to template as such:

\`\`\`
<div
  id="cardContainer"
  class="body"
>
  <Card v-for="item in items" v-bind:key="item" v-bind:item="item" />
</div>
\`\`\`

You can see the \`v-for\` attribute. It's a for loop, and it would render the \`Card\` inside that loop. the \`item\` of \`v-bind:item="item"\`, comes from that for loop. The key is also just a key on the element to help the render. 

Now save and go to the app. You can use the form to create a new task and make the application look like this:

<img src="/images/vue/3.jpg">

# Dragging
Now that we have layed out the code structure, it's time to add the dragging functionality. For this to work, i'm going to first explain another concept called \`Vuex\`.

## Vuex
It's something like Redux in React. It uses a flux methodoly to work and needs the \`Vuex\` package. In the featuers we selected when creating the project, we selected the Vuex, so it mush have already create the store. 

Checkout these two files:

- \`store/index.ts\`: It defines the store with:
  - state: to hold our state
  - mutations: to hold our mutation functions
  - actions: something like dispatchers in redux. To call the mutation functions (Not going to use this now)
  - modules: To split our store for different modules of the app (Not going to use this either)
- \`main.ts\`: It injects our store inside the Vue instance it creates

So let's set up the store. We need one state only and that is \`draggedTask\`. It holds the name of the task being dragged.

\`\`\`
export default new Vuex.Store({
  state: {
    draggedTask: ""
  },
  mutations: {
    setDraggedTask(state, {taskName}) {
      state.draggedTask = taskName
    }
  },
  actions: {},
  modules: {}
});
\`\`\`

## Set up dragging
Using Vuex will be just as easy as defining it. Let's go to our Card component and make some changes:
Add \`v-on:dragstart="drag"\` to the main \`div\` in the \`Card\` component. And then define the \`drag\` function:

Card.vue:
\`\`\`
 methods: {
    drag: (event) => {
      store.commit("setDraggedTask", {taskName: event.target.id})
    }
  }
\`\`\`

Go to the \`Column\` component and add the attributes for the drag to the \`cardContainer\`:

Column.vue:
\`\`\`
<div
  id="cardContainer"
  class="body"
  v-on:drop="drop"
  v-on:dragover="allowDrop"
>
  <Card v-for="item in items" v-bind:key="item" v-bind:item="item" />
</div>
\`\`\`

and then define the methods:

\`\`\`
methods: {
    allowDrop: (event) => event.preventDefault(),
    drop: function(event) {
      event.preventDefault();
      const taskName = store.state.draggedTask
      if (event.target.id === "cardContainer") {
        this.onChange(taskName, this.columnName);
      }
    },
  },
\`\`\`

You can see that it now fetches the task name from the store and sends it to the \`onChange\` function. We have already created this function. So now everything should be working now. Go and have a test. Create a task, and then drag it to another column.
Just one things needs to be added to the onChange function, and that is to empty the \`draggedTask\` in the state, after it's been dropped. So simply add \`store.commit("setDraggedTask", {taskName: ""})\` after \`this.tasks[ind].status = column;\` in the Home component. 

## Deleting a task
Now that we can drag the tasks, let's create a delete function as well. How it would work is, we show an image of a trash can, whenever a task is being dragged. So let's go to the Home component and add some stuff.

First add the trash can icon to the assets folder. You can use icon you like. Add it after the \`form\` element inside the \`Home\` component:

Home.vue:
\`\`\`
<template>
...
  </form>
  <img
      v-on:drop="deleteTask"
      v-on:dragover="allowDrop"
      v-if="showTrash"
      class="trash"
      src="../assets/trash.png"
    />
    ...
</template>

<style>
...

.trash {
  position: absolute;
  right: 2%;
  bottom: 10%;
  height: 100px;
}
...
</style>
\`\`\`

just like \`v-for\`, the \`v-if\` attribute will add a condition in showing the element. And the condition here is \`showTrash\`, meaning that it will show the element, when the \`showTrash\` variable is true or has a value.

\`showTrash\` comes from a new concept called, \`computed\`
Vue uses \`computed\` for variables that need computing everytime they're being used. And since we want to check our state everytime to show the trash, we're going to get it inside a \`computed\` method

Add \`computed\` at the same lever as \`data\` and \`methods\` inside the \`Home\` Component:

\`\`\`
computed: {
    showTrash() {
      return store.state.draggedTask !== ""
    }
  },
\`\`\`

We also need to add the functions \`deleteTask\` and \`allowDrop\` to our methods:

\`\`\`
deleteTask: function() {
  const taskName = store.state.draggedTask;
  const ind = this.tasks.findIndex(x => x.name === taskName);
  this.tasks.splice(ind, 1);
  store.commit("setDraggedTask", {taskName: ""});
},
allowDrop: (event: any) => event.preventDefault(),
\`\`\`

You can see that we fetch the name of the task from our store, and then empty the state.

The app is now complete and can easily drag the task from column to column, and also delete them by dropping them inside the trash can.


# One last touch
Now that the app is complete, simply for the matter of usability, let's add the tasks as cookies in the browsers. 

To do this, we're going to need a new package called \`vue-cookies\`
\`\`\`
yarn add vue-cookies
\`\`\`

First add it to main.ts: 

\`\`\`
...
import VueCookies from "vue-cookies";
...
Vue.use(VueCookies);
...
\`\`\`

Make these changes to the Home Component:

\`\`\`
data: function() {
  return {
    tasks: JSON.parse(this.$cookies.get("tasks")) || [],
    newTask: ""
  };
},
...
methods: {
  saveTasks: function() {
    this.$cookies.set("tasks", JSON.stringify(this.tasks));
  },
}
\`\`\`

Then add \`saveTasks\` to \`deleteTask\`, \`onChange\` and \`onCreate\` functions. 

# We're done
The app is now done. It creates tasks, moves them between columns, deletes them and save them to cookies. 

In case i have forgotten anything in this article or you are facing an issue that isn't explained above, have a look at the source code: [Github](https://github.com/ipinlnd/todo-vue)`;
