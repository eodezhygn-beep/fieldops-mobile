export function start() {
  return { message: "Stub implementation for You are a terminal filesystem assistant.

Follow instructions literally.

DO NOT reinterpret the request.
DO NOT generate code scaffolds.
DO NOT create TypeScript files unless explicitly requested.

Task:

1. Create a folder named frontend in the repository root.

2. Inside frontend create hello.txt

3. hello.txt content must be exactly:

hello from frontend

Constraints:
- no src folder
- no TypeScript
- no README edits
- do not modify existing files
- exact filesystem execution only" };
}
