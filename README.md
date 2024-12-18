# Next.js router.push with Query Parameters - Unexpected Behavior
This repository demonstrates a common error when using the `router.push` method in Next.js with query parameters and its solution.  The bug arises from incorrectly combining the path and query parameters within `router.push`. The solution shows the correct way to pass query parameters to ensure the expected routing behavior.

## Bug
The `bug.js` file contains a flawed implementation. When the button is clicked, the application doesn't route correctly to `/another-page` with the query parameter. This is because the query parameters are incorrectly concatenated with the path.

## Solution
The `bugSolution.js` demonstrates the correct approach. It uses an object to pass the query parameters separately from the path ensuring the expected routing behavior.