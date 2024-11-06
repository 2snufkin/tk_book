"use strict";(self.webpackChunktkbook=self.webpackChunktkbook||[]).push([[2946],{9490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"ZK/Event Handling And Operations","title":"ZK Framework: Event Handling and Operations","description":"The ZK Framework, a popular Java-based framework for building rich web applications, provides extensive support for event handling and managing operations. Understanding how to effectively utilize ZK\'s event handling mechanisms, including manual event firing, synchronized long operations, asynchronous operations, and the event queue, is crucial for developing responsive and efficient applications. This document will provide an overview of these concepts and their implementation within the ZK framework.","source":"@site/docs/ZK/Event Handling And Operations.md","sourceDirName":"ZK","slug":"/ZK/Event Handling And Operations","permalink":"/tk_book/ZK/Event Handling And Operations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Understanding Data Binding in MVC vs. MVVM with ZK Wire Component","permalink":"/tk_book/ZK/Data Binding"},"next":{"title":"Event Handling","permalink":"/tk_book/ZK/Event Handling"}}');var o=t(4848),s=t(8453);const i={},a="ZK Framework: Event Handling and Operations",l={},c=[{value:"1. ZK Event Manual Firing",id:"1-zk-event-manual-firing",level:2},{value:"Overview",id:"overview",level:3},{value:"Manual Event Firing",id:"manual-event-firing",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:4},{value:"2. Synchronized Long Operation",id:"2-synchronized-long-operation",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Synchronized Operations",id:"synchronized-operations",level:3},{value:"Using <code>Executions.async</code> for Background Tasks",id:"using-executionsasync-for-background-tasks",level:4},{value:"Example",id:"example-1",level:4},{value:"3. Asynchronous Operation",id:"3-asynchronous-operation",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Implementing Asynchronous Operations",id:"implementing-asynchronous-operations",level:3},{value:"Using <code>Executions.createComponents</code> and <code>Executions.postAsync</code>",id:"using-executionscreatecomponents-and-executionspostasync",level:4},{value:"Example",id:"example-2",level:4},{value:"4. ZK Event Queue",id:"4-zk-event-queue",level:2},{value:"Overview",id:"overview-3",level:3},{value:"Event Queue Management",id:"event-queue-management",level:3},{value:"Event Dispatching",id:"event-dispatching",level:4},{value:"Example of Handling Events from the Queue",id:"example-of-handling-events-from-the-queue",level:4},{value:"1. Listening to Events Fired Manually",id:"1-listening-to-events-fired-manually",level:3},{value:"2. Listening to Events from Synchronized Long Operations",id:"2-listening-to-events-from-synchronized-long-operations",level:3},{value:"Example",id:"example-3",level:4},{value:"3. Listening to Events from Asynchronous Operations",id:"3-listening-to-events-from-asynchronous-operations",level:3},{value:"Example",id:"example-4",level:4},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"zk-framework-event-handling-and-operations",children:"ZK Framework: Event Handling and Operations"})}),"\n",(0,o.jsx)(n.p,{children:"The ZK Framework, a popular Java-based framework for building rich web applications, provides extensive support for event handling and managing operations. Understanding how to effectively utilize ZK's event handling mechanisms, including manual event firing, synchronized long operations, asynchronous operations, and the event queue, is crucial for developing responsive and efficient applications. This document will provide an overview of these concepts and their implementation within the ZK framework."}),"\n",(0,o.jsx)(n.h2,{id:"1-zk-event-manual-firing",children:"1. ZK Event Manual Firing"}),"\n",(0,o.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"In ZK, events are used to respond to user actions and other triggers within the application. ZK provides a way to manually fire events, allowing developers to control when and how events are dispatched. This can be useful for custom interactions and complex logic that isn\u2019t directly triggered by user actions."}),"\n",(0,o.jsx)(n.h3,{id:"manual-event-firing",children:"Manual Event Firing"}),"\n",(0,o.jsxs)(n.p,{children:["To manually fire an event in ZK, you need to use the ",(0,o.jsx)(n.code,{children:"Events.postEvent"})," method. This method allows you to create and dispatch an event to a specified component or event listener."]}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Events.postEvent(eventName, targetComponent, eventData);\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"eventName"}),": The name of the event to be fired (e.g., ",(0,o.jsx)(n.code,{children:"onClick"}),", ",(0,o.jsx)(n.code,{children:"onChange"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"targetComponent"}),": The component that should receive the event."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"eventData"}),": Optional data to pass with the event."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.event.Events;\r\nimport org.zkoss.zk.ui.event.Event;\r\n\r\npublic void triggerCustomEvent(Component targetComponent) {\r\n    // Create and dispatch a custom event\r\n    Events.postEvent(new Event("onCustomEvent", targetComponent, "Custom Data"));\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, a custom event named ",(0,o.jsx)(n.code,{children:"onCustomEvent"})," is fired on the ",(0,o.jsx)(n.code,{children:"targetComponent"}),", with additional data ",(0,o.jsx)(n.code,{children:'"Custom Data"'}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"2-synchronized-long-operation",children:"2. Synchronized Long Operation"}),"\n",(0,o.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"When performing long-running operations in ZK, such as database queries or complex computations, it's crucial to manage synchronization to ensure that the user interface remains responsive and consistent."}),"\n",(0,o.jsx)(n.h3,{id:"synchronized-operations",children:"Synchronized Operations"}),"\n",(0,o.jsx)(n.p,{children:"ZK provides mechanisms to handle long operations without blocking the user interface. Typically, this involves using background threads or tasks that interact with ZK components in a synchronized manner."}),"\n",(0,o.jsxs)(n.h4,{id:"using-executionsasync-for-background-tasks",children:["Using ",(0,o.jsx)(n.code,{children:"Executions.async"})," for Background Tasks"]}),"\n",(0,o.jsxs)(n.p,{children:["ZK's ",(0,o.jsx)(n.code,{children:"Executions.async"})," method allows you to execute a task asynchronously, which helps in preventing the UI from becoming unresponsive."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Executions;\r\nimport org.zkoss.zk.ui.event.Event;\r\nimport org.zkoss.zk.ui.event.EventListener;\r\nimport org.zkoss.zk.ui.event.Events;\r\n\r\npublic void startLongOperation() {\r\n    Executions.async(new Runnable() {\r\n        public void run() {\r\n            // Perform long-running operation\r\n            String result = performLongRunningTask();\r\n\r\n            // Update the UI component with the result\r\n            Sessions.getCurrent().setAttribute("result", result);\r\n            Events.postEvent(new Event("onOperationComplete", null));\r\n        }\r\n    });\r\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this example, the long-running task is performed asynchronously. Once the task is complete, the result is posted as an event to the ZK event queue."}),"\n",(0,o.jsx)(n.h2,{id:"3-asynchronous-operation",children:"3. Asynchronous Operation"}),"\n",(0,o.jsx)(n.h3,{id:"overview-2",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Asynchronous operations in ZK allow you to perform tasks in the background while keeping the user interface responsive. ZK supports asynchronous execution through its built-in mechanisms."}),"\n",(0,o.jsx)(n.h3,{id:"implementing-asynchronous-operations",children:"Implementing Asynchronous Operations"}),"\n",(0,o.jsxs)(n.h4,{id:"using-executionscreatecomponents-and-executionspostasync",children:["Using ",(0,o.jsx)(n.code,{children:"Executions.createComponents"})," and ",(0,o.jsx)(n.code,{children:"Executions.postAsync"})]}),"\n",(0,o.jsxs)(n.p,{children:["To execute code asynchronously and update the UI once the task is complete, you can use ",(0,o.jsx)(n.code,{children:"Executions.createComponents"})," to create a new component and ",(0,o.jsx)(n.code,{children:"Executions.postAsync"})," to post the result."]}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Executions;\r\nimport org.zkoss.zk.ui.event.Event;\r\nimport org.zkoss.zk.ui.event.EventListener;\r\nimport org.zkoss.zk.ui.event.Events;\r\n\r\npublic void performAsyncOperation() {\r\n    // Execute asynchronously\r\n    Executions.postAsync(new Runnable() {\r\n        public void run() {\r\n            String result = performTask();\r\n\r\n            // Post the result to the UI thread\r\n            Executions.getCurrent().getDesktop().getSession().setAttribute("asyncResult", result);\r\n            Events.postEvent(new Event("onAsyncResult", null));\r\n        }\r\n    });\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"Executions.postAsync"})," is used to run the task in a background thread, and the result is posted back to the UI using an event."]}),"\n",(0,o.jsx)(n.h2,{id:"4-zk-event-queue",children:"4. ZK Event Queue"}),"\n",(0,o.jsx)(n.h3,{id:"overview-3",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"The ZK event queue is a mechanism that manages and processes events within the framework. It ensures that events are handled in a timely and orderly manner, which is crucial for maintaining a responsive user interface."}),"\n",(0,o.jsx)(n.h3,{id:"event-queue-management",children:"Event Queue Management"}),"\n",(0,o.jsx)(n.h4,{id:"event-dispatching",children:"Event Dispatching"}),"\n",(0,o.jsx)(n.p,{children:"ZK handles event dispatching internally. When an event is fired, it is placed in the event queue and dispatched to the appropriate event listeners."}),"\n",(0,o.jsx)(n.h4,{id:"example-of-handling-events-from-the-queue",children:"Example of Handling Events from the Queue"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.event.Event;\r\nimport org.zkoss.zk.ui.event.EventListener;\r\nimport org.zkoss.zk.ui.event.Events;\r\nimport org.zkoss.zul.Label;\r\n\r\npublic class MyEventListener implements EventListener<Event> {\r\n\r\n    @Override\r\n    public void onEvent(Event event) throws Exception {\r\n        if (event.getName().equals("onAsyncResult")) {\r\n            String result = (String) Executions.getCurrent().getDesktop().getSession().getAttribute("asyncResult");\r\n            // Update the UI component with the result\r\n            Label resultLabel = (Label) Executions.getCurrent().getPage().getFellow("resultLabel");\r\n            resultLabel.setValue(result);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, an event listener processes events from the event queue and updates the UI based on the event data.\r\nYou\u2019re right\u2014",(0,o.jsx)(n.code,{children:"@Listen"})," is not actually a part of the ",(0,o.jsx)(n.code,{children:"GenericForwardComposer"})," class in ZK. I apologize for the confusion. Instead, event handling in ",(0,o.jsx)(n.code,{children:"GenericForwardComposer"})," involves a different approach."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"GenericForwardComposer"}),", you handle events by defining methods in the composer class and then connecting these methods to the components or events using ZK's event binding features. Here's how you can manage events in ",(0,o.jsx)(n.code,{children:"GenericForwardComposer"})," without using ",(0,o.jsx)(n.code,{children:"@Listen"}),":"]}),"\n",(0,o.jsx)(n.h3,{id:"1-listening-to-events-fired-manually",children:"1. Listening to Events Fired Manually"}),"\n",(0,o.jsx)(n.p,{children:"To handle manually fired events, follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Define Event Handling Methods in Your Composer:"})}),"\n",(0,o.jsxs)(n.p,{children:["You write methods in your ",(0,o.jsx)(n.code,{children:"GenericForwardComposer"})," that will respond to specific events. These methods need to be named in such a way that they are easy to call from the event dispatch logic."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Component;\r\nimport org.zkoss.zk.ui.event.Event;\r\nimport org.zkoss.zk.ui.event.EventListener;\r\nimport org.zkoss.zk.ui.util.GenericForwardComposer;\r\n\r\npublic class MyComposer extends GenericForwardComposer {\r\n\r\n    private Component myComponent;\r\n\r\n    @Override\r\n    public void doAfterCompose(Component comp) throws Exception {\r\n        super.doAfterCompose(comp);\r\n        this.myComponent = comp;\r\n        // Set up the listener programmatically\r\n        myComponent.addEventListener("onCustomEvent", new EventListener<Event>() {\r\n            @Override\r\n            public void onEvent(Event event) throws Exception {\r\n                handleCustomEvent(event);\r\n            }\r\n        });\r\n    }\r\n\r\n    public void handleCustomEvent(Event event) {\r\n        String data = (String) event.getData();\r\n        // Handle the event data\r\n        System.out.println("Received custom event with data: " + data);\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Fire the Event:"})}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"Events.postEvent"})," to fire the event from elsewhere in your application."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.event.Events;\r\nimport org.zkoss.zk.ui.Component;\r\n\r\npublic void triggerCustomEvent(Component targetComponent) {\r\n    Events.postEvent(new Event("onCustomEvent", targetComponent, "Custom Data"));\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-listening-to-events-from-synchronized-long-operations",children:"2. Listening to Events from Synchronized Long Operations"}),"\n",(0,o.jsx)(n.p,{children:"To handle events from synchronized long operations, set up your composer to listen for specific events by programmatically attaching event listeners."}),"\n",(0,o.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Define the Event Handler:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Component;\r\nimport org.zkoss.zk.ui.event.Event;\r\nimport org.zkoss.zk.ui.event.EventListener;\r\nimport org.zkoss.zk.ui.util.GenericForwardComposer;\r\n\r\npublic class MyComposer extends GenericForwardComposer {\r\n\r\n    private Component myComponent;\r\n\r\n    @Override\r\n    public void doAfterCompose(Component comp) throws Exception {\r\n        super.doAfterCompose(comp);\r\n        this.myComponent = comp;\r\n        // Attach event listener for synchronized long operations\r\n        myComponent.addEventListener("onOperationComplete", new EventListener<Event>() {\r\n            @Override\r\n            public void onEvent(Event event) throws Exception {\r\n                handleOperationComplete(event);\r\n            }\r\n        });\r\n    }\r\n\r\n    public void handleOperationComplete(Event event) {\r\n        String result = (String) Executions.getCurrent().getDesktop().getSession().getAttribute("result");\r\n        // Handle the result\r\n        System.out.println("Operation complete with result: " + result);\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Post the Event from a Long Operation:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Executions;\r\nimport org.zkoss.zk.ui.event.Events;\r\n\r\npublic void startLongOperation() {\r\n    // Perform the long-running task\r\n    String result = performLongRunningTask();\r\n\r\n    // Store the result and post the event\r\n    Sessions.getCurrent().setAttribute("result", result);\r\n    Events.postEvent(new Event("onOperationComplete", null));\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3-listening-to-events-from-asynchronous-operations",children:"3. Listening to Events from Asynchronous Operations"}),"\n",(0,o.jsx)(n.p,{children:"Handling events from asynchronous operations involves similar steps as synchronized operations, but you ensure the operation runs asynchronously."}),"\n",(0,o.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Define the Event Handler:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Component;\r\nimport org.zkoss.zk.ui.event.Event;\r\nimport org.zkoss.zk.ui.event.EventListener;\r\nimport org.zkoss.zk.ui.util.GenericForwardComposer;\r\n\r\npublic class MyComposer extends GenericForwardComposer {\r\n\r\n    private Component myComponent;\r\n\r\n    @Override\r\n    public void doAfterCompose(Component comp) throws Exception {\r\n        super.doAfterCompose(comp);\r\n        this.myComponent = comp;\r\n        // Attach event listener for asynchronous results\r\n        myComponent.addEventListener("onAsyncResult", new EventListener<Event>() {\r\n            @Override\r\n            public void onEvent(Event event) throws Exception {\r\n                handleAsyncResult(event);\r\n            }\r\n        });\r\n    }\r\n\r\n    public void handleAsyncResult(Event event) {\r\n        String result = (String) Executions.getCurrent().getDesktop().getSession().getAttribute("asyncResult");\r\n        // Handle the asynchronous result\r\n        System.out.println("Asynchronous result: " + result);\r\n    }\r\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Post the Asynchronous Event:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.zkoss.zk.ui.Executions;\r\nimport org.zkoss.zk.ui.event.Events;\r\n\r\npublic void performAsyncOperation() {\r\n    Executions.postAsync(new Runnable() {\r\n        public void run() {\r\n            String result = performTask();\r\n            Sessions.getCurrent().setAttribute("asyncResult", result);\r\n            Events.postEvent(new Event("onAsyncResult", null));\r\n        }\r\n    });\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"GenericForwardComposer"}),", you handle events by programmatically attaching event listeners to components in the ",(0,o.jsx)(n.code,{children:"doAfterCompose"})," method and by defining methods to handle these events. This approach allows you to manage various types of events, including manually fired events, synchronized long operations, and asynchronous tasks, effectively within your ZK applications."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);