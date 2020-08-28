import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hello from "./hello.ts";

Deno.test("Say hello on correct way", () => {
  const want = "Hello, Arthur Antunes Coimbra!";
  const got = hello("/Arthur/Antunes/Coimbra");
  assertEquals(got, want);
});
