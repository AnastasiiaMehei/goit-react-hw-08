export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

// export const selectIsRefreshing = (state) => state.auth.isRefreshing;
// selectors.js

export const selectToken = (state) => state.auth.token; // Новый селектор для токена
// selectors.js

export const selectAllContacts = (state) => state.contacts.items;
