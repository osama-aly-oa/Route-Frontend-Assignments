// --- GLOBAL UI SELECTIONS ---
const contactsGrid = document.getElementById("contactsGrid");
const addContactModalEl = document.getElementById("addContactModal");
const contactStats = document.getElementById("contactStats");
const contactP = document.getElementById("contactP");

// Form Inputs
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const addressInput = document.getElementById("addressInput");
const groupInput = document.getElementById("groupInput");
const notesInput = document.getElementById("notesInput");
const favInput = document.getElementById("favInput");
const emgInput = document.getElementById("emgInput");
const searchInput = document.getElementById("searchInput");
const totalCount = document.getElementById("totalCount");
const favCount = document.getElementById("favCount");
const emgCount = document.getElementById("emgCount");
const favSection = document.getElementById("favSection");
const emgSection = document.getElementById("emgSection");
const modalTitle = document.getElementById("modalTitle");
const modalSubmitBtn = document.getElementById("modalSubmitBtn");

// --- CONFIGURATION & STATE ---
const STORAGE_KEY = "contactHub_db";

// Default Data
const dummyData = [
  {
    id: 171562,
    name: "Osama Aly",
    phone: "+201011489342",
    email: "o@gmail.com",
    address: "El hegaz st.",
    group: "Family",
    isFav: true,
    isEmg: false,
    initial: "O",
  },
];

// Initialize App
function init() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData));
  }
  renderContacts();
}

// --- CORE FUNCTIONS ---
// READ: Get data and display
function renderContacts(contactsList = null) {
  const allContacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const displayContacts = contactsList || allContacts;

  // --- UPDATE STATS (Use allContacts) ---
  const total = allContacts.length;
  const favs = allContacts.filter((c) => c.isFav).length;
  const emgs = allContacts.filter((c) => c.isEmg).length;

  contactP.innerHTML = `Manage and organize your ${total} contacts`;

  // Render Stats HTML
  if (contactStats) {
    contactStats.innerHTML = `
        <div class="col-md-4">
            <div class="stat-card">
                <div class="icon-box icon-box-lg icon-blue"><i class="fas fa-users"></i></div>
                <div>
                    <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem;">Total</small>
                    <h4 class="mb-0 fw-bold">${total}</h4>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="stat-card">
                <div class="icon-box icon-box-lg icon-orange"><i class="fas fa-star"></i></div>
                <div>
                    <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem;">Favorites</small>
                    <h4 class="mb-0 fw-bold">${favs}</h4>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="stat-card">
                <div class="icon-box icon-box-lg icon-red"><i class="fas fa-heartbeat"></i></div>
                <div>
                    <small class="text-muted text-uppercase fw-bold" style="font-size: 0.7rem;">Emergency</small>
                    <h4 class="mb-0 fw-bold">${emgs}</h4>
                </div>
            </div>
        </div>
      `;
  }

  contactsGrid.innerHTML = "";

  if (displayContacts.length === 0) {
    contactsGrid.innerHTML =
      '<div class="col-12 text-center text-muted py-5">No contacts found.</div>';
  }

  displayContacts.forEach((contact) => {
    const cardHTML = `
        <div class="col-lg-6 mt-sm-3">
                <div class="contact-card h-100 ">
                    <div class="contact-body p-4">
                        <div class="position-relative me-4">

                            <div class="d-flex gap-3">
                                <div class="position-relative">
                                    <div class="avatar-xl rounded-2 d-flex align-items-center justify-content-center text-white fw-bold display-6" 
                                         style="background-color: ${getColor(contact.initial)}">
                                        ${contact.initial}
                                    </div>
                                    ${
                                      contact.isFav
                                        ? `<i class="fas fa-star position-absolute top-0 start-100 translate-middle
                                            bg-warning text-white border border-white rounded-circle p-1"
                                            style="font-size:0.75rem;"></i>`
                                        : ""
                                    }
                                    ${
                                      contact.isEmg
                                        ? `<i
                                        class="fas fa-heartbeat position-absolute start-100 translate-middle
                                        bg-danger text-white border border-white rounded-circle p-1"
                                        style="font-size:0.75rem; bottom: 3px;"></i>`
                                        : ""
                                    }
                                </div>

                                <div class="ms-2">
                                    <h4 class="fw-bold mb-2 fs-5">${contact.name}</h4>
                                    <div class="d-flex align-items-center mb-3">
                                        <i class="fas fa-phone text-primary me-2 bg-blue-subtle p-2 rounded-2"></i> 
                                        <span class="fw-medium text-secondary">${contact.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3">
                                <div class="d-flex align-items-center text-muted mb-2">
                                    <div class="icon-square bg-purple-light text-purple me-3">
                                        <i class="far fa-envelope"></i>
                                    </div>
                                    <span class="fw-medium">${contact.email}</span>
                                </div>

                                <div class="d-flex align-items-center text-muted mb-4">
                                    <div class="icon-square bg-green-light text-green me-3">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <span class="fw-medium">${contact.address}</span>
                                </div>

                                <div class="d-flex gap-2 flex-wrap">
                                    <span class="badge-tag badge-work">${contact.group}</span>
                                    ${contact.isEmg ? '<span class="badge-tag badge-emergency"><i class="fas fa-heartbeat me-1"></i>Emergency</span>' : ""}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card-footer-actions p-3">
                        <div class="d-flex gap-2">
                            <a href="tel:${contact.phone}" class="action-icon-bg bg-green-subtle text-decoration-none">
                                <i class="fas fa-phone text-success"></i>
                            </a>
                            <a href="mailto:${contact.email}" class="action-icon-bg bg-purple-subtle text-decoration-none">
                                <i class="fas fa-envelope text-purple"></i>
                            </a>
                        </div>

                        <div class="d-flex gap-2">
                            <button onclick="toggleFav(${contact.id})"
                                class="action-icon-bg ${contact.isFav ? " bg-warning-subtle" : ""} border-0
                                bg-transparent hover-btn-warning">
                                <i class="${contact.isFav ? " fas" : "far"} fa-star text-warning"></i>
                            </button>

                            <button onclick="toggleEmg(${contact.id})"
                                class="action-icon-bg ${contact.isEmg ? " bg-danger-subtle" : ""} border-0
                                bg-transparent hover-btn-danger">
                                <i class="${contact.isEmg ? " fas" : "far"} fa-heart text-danger"></i>
                            </button>

                            <button onclick="prepareEdit(${contact.id})" class="action-icon-bg border-0 bg-transparent hover-btn-purple">
                                <i class="fas fa-pen text-purple"></i>
                            </button>

                            <button onclick="deleteContact(${contact.id})"
                                class="action-icon-bg border-0 bg-transparent hover-btn-danger">
                                <i class="fas fa-trash text-muted"></i>
                            </button>

                        </div>
                </div>
        </div>                    
    `;
    contactsGrid.innerHTML += cardHTML;
  });

  // Favorites Section
  favSection.innerHTML = "";
  allContacts.forEach((contact) => {
    if (contact.isFav) {
      const cardHTML = `
            <div class="mini-contact shadow-sm mb-2">
                <div class="d-flex align-items-center justify-content-between p-1 rounded">
                    <div class="d-flex align-items-center">
                        <div class="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-2"style="width: 32px; height: 32px; font-size: 0.8rem; background-color: ${getColor(contact.initial)}">
                            ${contact.initial}
                        </div>
                        <div style="line-height: 1.2;">
                            <div class="fw-bold small">${contact.name}</div>
                            <small class="text-muted" style="font-size: 0.7rem;">${contact.phone}</small>
                        </div>
                    </div>
                    <i class="fas fa-phone action-icon text-green p-2 rounded-circle" style="background: #f0fdf4; font-size: 0.8rem;"></i>
                </div>
            </div>
          `;
      favSection.innerHTML += cardHTML;
    }
  });

  // Emergency Section
  emgSection.innerHTML = "";
  allContacts.forEach((contact) => {
    if (contact.isEmg) {
      const cardHTML = `
            <div class="mini-contact shadow-sm mb-2">
                <div class="d-flex align-items-center justify-content-between p-1 rounded">
                    <div class="d-flex align-items-center">
                      <div class="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-2" style="width: 32px; height: 32px; font-size: 0.8rem; background-color: ${getColor(contact.initial)}">
                            ${contact.initial}
                        </div>
                        <div style="line-height: 1.2;">
                            <div class="fw-bold small">${contact.name}</div>
                            <small class="text-muted" style="font-size: 0.7rem;">${contact.phone}</small>
                        </div>
                    </div>
                    <i class="fas fa-phone action-icon text-danger p-2 rounded-circle" style="background: #fff1f2; font-size: 0.8rem;"></i>
                </div>
            </div>
          `;
      emgSection.innerHTML += cardHTML;
    }
  });
}

// Search: Searches for contacts card
function searchContacts() {
  const query = searchInput.value.toLowerCase();

  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.phone.includes(query) ||
      contact.email.toLowerCase().includes(query)
    );
  });

  renderContacts(filteredContacts);
}

// CREATE: Add new contact
function addContact() {
  // Get Raw Values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  // --- RUN VALIDATION ---
  if (!validateInputs(name, phone, email)) {
    return; // Stop if validation fails
  }

  // Prepare other data
  const address = addressInput.value || "No Address";
  const groupSelect = groupInput;
  const group = groupSelect.options[groupSelect.selectedIndex].text;
  const isFav = favInput.checked;
  const isEmg = emgInput.checked;
  const displayEmail = email || "No Email"; // Handle empty email for display

  // Create Object
  const newContact = {
    id: Date.now(),
    name: name,
    phone: phone,
    email: displayEmail,
    address: address,
    group: group,
    isFav: isFav,
    isEmg: isEmg,
    initial: name.charAt(0).toUpperCase(),
  };

  // Save to Local Storage
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  contacts.push(newContact);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));

  // Reset & Render
  renderContacts();

  // Close Modal
  const modal = bootstrap.Modal.getInstance(addContactModalEl);
  modal.hide();

  // Clear form
  document.querySelector("form").reset();

  // --- SHOW SUCCESS ALERT ---
  Swal.fire({
    icon: "success",
    title: "Saved!",
    text: "New contact has been added.",
    timer: 1500,
    showConfirmButton: false,
  });
}

// DELETE: Remove contact with SweetAlert2 Confirmation
function deleteContact(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33", 
    cancelButtonColor: "#6c757d",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // Perform Deletion
      let contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
      contacts = contacts.filter((c) => c.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));

      // Refresh Grid
      renderContacts();

      // Show Success Message
      Swal.fire({
        title: "Deleted!",
        text: "The contact has been removed.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
}

// UPDATE: Edit Contacts & Toggle Favorite
// Prepare Modal for Editing (Runs when Pen is clicked)
function prepareEdit(id) {
  // Find the contact
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const contact = contacts.find((c) => c.id === id);

  if (!contact) return;

  // Fill Inputs
  nameInput.value = contact.name;
  phoneInput.value = contact.phone;
  emailInput.value = contact.email;
  addressInput.value = contact.address;
  notesInput.value = contact.notes || "";

  // Select Group
  // Loop through options to find the matching text
  Array.from(groupInput.options).forEach((option) => {
    if (option.text === contact.group) {
      groupInput.value = option.value;
    }
  });

  // Checkboxes
  favInput.checked = contact.isFav;
  emgInput.checked = contact.isEmg;

  // Change Modal UI to "Edit Mode"
  modalTitle.innerText = "Update Contact";
  modalSubmitBtn.innerHTML = '<i class="fas fa-save me-2"></i> Update Contact';

  modalSubmitBtn.onclick = function () {
    updateContact(id);
  };

  // Show Modal
  const modal = new bootstrap.Modal(addContactModalEl);
  modal.show();
}

// Save Changes (Runs when "Update Contact" is clicked)
function updateContact(id) {
  // Get Raw Values
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  // --- RUN VALIDATION ---
  if (!validateInputs(name, phone, email)) {
    return; // Stop if validation fails
  }

  // Get Data
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const index = contacts.findIndex((c) => c.id === id);

  if (index !== -1) {
    // Update fields
    contacts[index].name = name;
    contacts[index].phone = phone;
    contacts[index].email = email || "No Email";
    contacts[index].address = addressInput.value;
    contacts[index].group = groupInput.options[groupInput.selectedIndex].text;
    contacts[index].notes = notesInput.value;
    contacts[index].isFav = favInput.checked;
    contacts[index].isEmg = emgInput.checked;
    contacts[index].initial = name.charAt(0).toUpperCase();

    // Save & Render
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    renderContacts();

    // Close Modal
    const modal = bootstrap.Modal.getInstance(addContactModalEl);
    modal.hide();

    // --- SHOW SUCCESS ALERT ---
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: "Contact details have been updated.",
      timer: 1500,
      showConfirmButton: false,
    });
  }
}

// Reset Modal (Runs when adding a NEW contact)
function openAddModal() {
  document.querySelector("form").reset();

  // Reset UI to "Add Mode"
  modalTitle.innerText = "Add New Contact";
  modalSubmitBtn.innerHTML = '<i class="fas fa-check me-2"></i> Save Contact';

  // Reset Button Action to addContact
  modalSubmitBtn.onclick = addContact;

  // Show Modal
  const modal = new bootstrap.Modal(addContactModalEl);
  modal.show();
}

function toggleFav(id) {
  let contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts[index].isFav = !contacts[index].isFav;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    renderContacts();
  }
}

function toggleEmg(id) {
  let contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts[index].isEmg = !contacts[index].isEmg;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    renderContacts();
  }
}

// HELPER: Get random color
function getColor(char) {
  const colors = ["#f43f5e", "#7c3aed", "#10b981", "#f59e0b", "#3b82f6"];
  const index = char.charCodeAt(0) % colors.length;
  return colors[index];
}

// --- VALIDATION HELPER ---
function validateInputs(name, phone, email) {
  // Name Regex: Allows English/Arabic letters and spaces (3 to 30 chars)
  const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]{3,30}$/;

  // Phone Regex: Allows numbers, spaces, +, -, (, ) (10 to 20 chars)
  const phoneRegex = /^[\d\+\-\(\)\s]{10,20}$/;

  // Email Regex: Standard email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // --- CHECK NAME ---
  if (!nameRegex.test(name)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Name",
      text: "Name must be 3-30 characters (Letters only).",
      confirmButtonColor: "#d33",
    });
    return false;
  }

  // --- CHECK PHONE ---
  if (!phoneRegex.test(phone)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Phone",
      text: "Please enter a valid phone number (e.g., +2010...)",
      confirmButtonColor: "#d33",
    });
    return false;
  }

  // --- CHECK EMAIL (Only if user typed something) ---
  if (email.length > 0 && !emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
      confirmButtonColor: "#d33",
    });
    return false;
  }

  return true;
}

// Run the app
init();
