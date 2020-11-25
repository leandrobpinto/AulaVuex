<template>
  <b-row>
    <h1>lista de usuarios</h1>

    <b-row>
      <b-card-group deck>
        <b-card
          v-for="user in allUsers"
          :key="user.id"
          border-variant="primary"
          :header="user.name"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
          style="min-width: 16rem; max-width: 16rem"
        >
          <!-- <div>
            <router-link
              tag="h3"
              :to="{ name: 'usersDetail', params: { id: user.id } }"
            >
              {{ user.name }}
            </router-link>
          </div> -->
          <div><span>Username:</span> {{ user.username }}</div>
          <div><span>Email:</span> {{ user.email }}</div>
          <div><span>Address:</span></div>
          <div>&nbsp; <span>Street:</span> {{ user.address.street }}</div>
          <div>&nbsp;<span>Suite:</span> {{ user.address.suite }}</div>
          <div>&nbsp;<span>City: </span>{{ user.address.city }}</div>
          <div>&nbsp;<span>Zipcode:</span> {{ user.address.zipcode }}</div>
          <div><span>Geo:</span></div>
          <div>&nbsp;<span>Latitude: </span>{{ user.address.geo.lat }}</div>
          <div>&nbsp;<span>Longitude:</span> {{ user.address.geo.lng }}</div>
          <div><span>Phone: </span>{{ user.phone }}</div>
          <div><span>Website:</span> {{ user.website }}</div>
          <div><span>Company:</span></div>
          <div>&nbsp;<span>Name: </span>{{ user.company.name }}</div>
          <div>
            &nbsp;<span>Catch Phrase:</span> {{ user.company.catchPhrase }}
          </div>
          <div>&nbsp;<span>BS:</span> {{ user.company.bs }}</div>
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "listaUsuarios",
  computed: mapGetters(["allUsers"]),
};
</script>

<style>
.row {
  margin-left: 15px;
}
.card {
  margin: 20px;
}
</style>