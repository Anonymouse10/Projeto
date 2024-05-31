<script setup lang="ts">
import { ref } from 'vue'

const options = ref([''])
</script>

<template>
  <form>
    <div class="login-form">
      <Field>
        <FieldLabel label="Usuario" />
        <Control icon="feather:user">
          <VInput placeholder="..." />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="Senha" />
        <Control icon="feather:lock">
          <VInput type="password" placeholder="Senha..." />
        </Control>
      </Field>

      <Control class="mt-4">
        <Button color="primary" fullwidth bold raised>Entrar</Button>
      </Control>
    </div>
  </form>
</template>
