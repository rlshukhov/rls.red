<script setup lang='ts'>
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {useColorMode} from "@vueuse/core";

const mode = useColorMode()
</script>

<template>
  <div class="container h-screen flex items-center justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Are you sure?</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button variant="outline">
          Cancel
        </Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  </div>
</template>