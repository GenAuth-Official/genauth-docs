# Data resource permissions

<LastUpdated/>

The difference between regular resources and data resources: one is the data type, and the other is the authorization method (the former is directly authorized to the space, while the latter needs to be packaged into a policy before authorization).

Data resources show the list of data resources in the entire user pool.
Data policy: Each policy packages several resources and operations together, which is called a policy.
Permission view: used by customers for permission auditing. The authorization relationship based on the user dimension, what permissions each user has, what resources are linked, and which permission space they correspond to.

Create data resources: There are three types (string, array structure, tree structure), and the table structure is expected. Each type has its own unique data structure. Let's talk about the application scenarios of various types. The common scenario of tree structure is menu.
Under the menu, you can create child nodes and expand a node.
The tree structure is hierarchical. Customers can customize the value of the operation, in English.

JSON view: The data representation of resources can be judged through JSON.

There are two common applications of tree-structured data resources: tree-structured menus and document systems with directory hierarchies.

## Data policy

First select the resource, then package the resources together. You can select resources across permission spaces. If the resource is a tree-structured data resource, select granularity refinement, or select a node at a certain level.
After the policy is packaged, click the **Authorize** button to authorize it to a certain subject (you can select multiple subjects of different types to authorize a certain policy at the same time). The policy can be understood as a series of resources.

## Permission view

The resources associated with the policy are attached to the user. Regardless of which group the user belongs to, which role permissions he has, and which department he belongs to, it will eventually be presented in the user dimension.