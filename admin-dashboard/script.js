/* ========================================
   Admin Dashboard - JavaScript
   ======================================== */

// ---- Sample Data ----
const usersData = [
    { id: 1, name: "Sarah Johnson", email: "sarah.johnson@email.com", role: "Admin", status: "active", joined: "2025-12-15", avatar: "#6366f1" },
    { id: 2, name: "Michael Chen", email: "michael.chen@email.com", role: "Editor", status: "active", joined: "2026-01-08", avatar: "#f59e0b" },
    { id: 3, name: "Emily Davis", email: "emily.davis@email.com", role: "Viewer", status: "inactive", joined: "2025-11-22", avatar: "#10b981" },
    { id: 4, name: "James Wilson", email: "james.wilson@email.com", role: "Editor", status: "active", joined: "2026-02-03", avatar: "#ef4444" },
    { id: 5, name: "Lisa Anderson", email: "lisa.anderson@email.com", role: "Admin", status: "active", joined: "2025-10-18", avatar: "#8b5cf6" },
    { id: 6, name: "Robert Taylor", email: "robert.taylor@email.com", role: "Viewer", status: "pending", joined: "2026-03-12", avatar: "#ec4899" },
    { id: 7, name: "Amanda Martinez", email: "amanda.martinez@email.com", role: "Editor", status: "active", joined: "2025-09-05", avatar: "#14b8a6" },
    { id: 8, name: "David Brown", email: "david.brown@email.com", role: "Viewer", status: "inactive", joined: "2026-01-20", avatar: "#f97316" },
    { id: 9, name: "Jennifer Lee", email: "jennifer.lee@email.com", role: "Admin", status: "active", joined: "2025-08-14", avatar: "#06b6d4" },
    { id: 10, name: "Christopher White", email: "chris.white@email.com", role: "Editor", status: "active", joined: "2026-02-28", avatar: "#84cc16" },
    { id: 11, name: "Jessica Thomas", email: "jessica.thomas@email.com", role: "Viewer", status: "pending", joined: "2026-03-05", avatar: "#a855f7" },
    { id: 12, name: "Daniel Garcia", email: "daniel.garcia@email.com", role: "Editor", status: "active", joined: "2025-12-01", avatar: "#e11d48" },
    { id: 13, name: "Michelle Robinson", email: "michelle.robinson@email.com", role: "Viewer", status: "active", joined: "2026-01-15", avatar: "#0ea5e9" },
    { id: 14, name: "Kevin Clark", email: "kevin.clark@email.com", role: "Admin", status: "inactive", joined: "2025-07-22", avatar: "#eab308" },
    { id: 15, name: "Stephanie Lewis", email: "steph.lewis@email.com", role: "Editor", status: "active", joined: "2026-03-18", avatar: "#22c55e" },
    { id: 16, name: "Andrew Hall", email: "andrew.hall@email.com", role: "Viewer", status: "active", joined: "2025-11-10", avatar: "#7c3aed" },
    { id: 17, name: "Nicole Young", email: "nicole.young@email.com", role: "Editor", status: "pending", joined: "2026-04-01", avatar: "#f43f5e" },
    { id: 18, name: "Brian King", email: "brian.king@email.com", role: "Viewer", status: "active", joined: "2025-10-30", avatar: "#0891b2" },
    { id: 19, name: "Rachel Wright", email: "rachel.wright@email.com", role: "Admin", status: "active", joined: "2026-02-14", avatar: "#d946ef" },
    { id: 20, name: "Mark Scott", email: "mark.scott@email.com", role: "Editor", status: "inactive", joined: "2025-09-28", avatar: "#059669" }
];

// ---- DOM Elements ----
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileToggle = document.getElementById('mobileToggle');
const overlay = document.getElementById('overlay');
const themeToggle = document.getElementById('themeToggle');
const tableSearch = document.getElementById('tableSearch');
const selectAll = document.getElementById('selectAll');
const usersTableBody = document.getElementById('usersTableBody');
const toastContainer = document.getElementById('toastContainer');

// ---- State ----
let currentPage = 1;
const rowsPerPage = 8;
let filteredUsers = [...usersData];
let sortColumn = null;
let sortDirection = 'asc';

// ---- Sidebar Toggle ----
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
    });
}

if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
        sidebar.classList.toggle('mobile-open');
        overlay.classList.toggle('active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    });
}

// ---- Theme Toggle ----
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('admin-theme', theme);
    var icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
        initCharts();
    });
}

// Load saved theme
var savedTheme = localStorage.getItem('admin-theme');
if (savedTheme) {
    setTheme(savedTheme);
}

// ---- Navigation ----
document.querySelectorAll('.nav-item a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(function (item) {
            item.classList.remove('active');
        });
        this.parentElement.classList.add('active');

        // Close mobile menu
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');

        showToast('Navigated to ' + this.querySelector('span').textContent, 'info');
    });
});

// ---- Animated Counters ----
function animateCounters() {
    var counters = document.querySelectorAll('.stat-value');
    counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute('data-target'));
        var duration = 1500;
        var startTime = null;

        function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);

            if (counter.closest('.stat-card:nth-child(2)')) {
                counter.textContent = '$' + current.toLocaleString();
            } else if (counter.closest('.stat-card:nth-child(4)')) {
                counter.textContent = current + '%';
            } else {
                counter.textContent = current.toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    });
}

// ---- Charts ----
var revenueChartInstance = null;
var trafficChartInstance = null;

function initCharts() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var gridColor = isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(0, 0, 0, 0.06)';
    var textColor = isDark ? '#94a3b8' : '#64748b';

    // Revenue Chart
    var revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        if (revenueChartInstance) revenueChartInstance.destroy();

        revenueChartInstance = new Chart(revenueCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [4200, 5800, 4900, 6200, 7100, 6800, 7500, 8200, 7800, 9100, 8600, 9500],
                        borderColor: '#6366f1',
                        backgroundColor: function (context) {
                            var chart = context.chart;
                            var ctx2 = chart.ctx;
                            var area = chart.chartArea;
                            if (!area) return null;
                            var gradient = ctx2.createLinearGradient(0, area.top, 0, area.bottom);
                            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
                            gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)');
                            return gradient;
                        },
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: '#6366f1',
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 3
                    },
                    {
                        label: 'Expenses',
                        data: [2800, 3200, 2900, 3800, 4100, 3600, 4200, 4800, 4500, 5200, 4900, 5400],
                        borderColor: '#f59e0b',
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        borderDash: [6, 4],
                        fill: false,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#f59e0b',
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 20,
                            color: textColor,
                            font: { size: 12, family: 'Inter' }
                        }
                    },
                    tooltip: {
                        backgroundColor: isDark ? '#1e293b' : '#fff',
                        titleColor: isDark ? '#f1f5f9' : '#1e293b',
                        bodyColor: isDark ? '#94a3b8' : '#64748b',
                        borderColor: isDark ? '#334155' : '#e2e8f0',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: true,
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: textColor, font: { size: 12, family: 'Inter' } }
                    },
                    y: {
                        grid: { color: gridColor },
                        ticks: {
                            color: textColor,
                            font: { size: 12, family: 'Inter' },
                            callback: function (value) { return '$' + (value / 1000) + 'k'; }
                        },
                        border: { display: false }
                    }
                }
            }
        });
    }

    // Traffic Doughnut Chart
    var trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        if (trafficChartInstance) trafficChartInstance.destroy();

        trafficChartInstance = new Chart(trafficCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Organic', 'Referral', 'Social'],
                datasets: [{
                    data: [35, 30, 20, 15],
                    backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '72%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: isDark ? '#1e293b' : '#fff',
                        titleColor: isDark ? '#f1f5f9' : '#1e293b',
                        bodyColor: isDark ? '#94a3b8' : '#64748b',
                        borderColor: isDark ? '#334155' : '#e2e8f0',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: {
                            label: function (context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });

        // Custom legend
        var legendContainer = document.getElementById('trafficLegend');
        if (legendContainer) {
            var colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];
            var labels = ['Direct', 'Organic', 'Referral', 'Social'];
            var values = [35, 30, 20, 15];
            legendContainer.innerHTML = '';
            labels.forEach(function (label, i) {
                var item = document.createElement('div');
                item.className = 'legend-item';
                item.innerHTML = '<span class="legend-dot" style="background:' + colors[i] + '"></span>' + label + ' (' + values[i] + '%)';
                legendContainer.appendChild(item);
            });
        }
    }
}

// ---- User Table ----
function getInitials(name) {
    return name.split(' ').map(function (n) { return n[0]; }).join('').toUpperCase();
}

function formatDate(dateStr) {
    var date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderTable() {
    var start = (currentPage - 1) * rowsPerPage;
    var end = start + rowsPerPage;
    var pageUsers = filteredUsers.slice(start, end);

    usersTableBody.innerHTML = '';

    if (pageUsers.length === 0) {
        var emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted);">No users found</td>';
        usersTableBody.appendChild(emptyRow);
    } else {
        pageUsers.forEach(function (user) {
            var tr = document.createElement('tr');
            tr.innerHTML =
                '<td><input type="checkbox" class="checkbox row-checkbox" data-id="' + user.id + '"></td>' +
                '<td>' +
                    '<div class="user-cell">' +
                        '<div class="user-avatar" style="background:' + user.avatar + '">' + getInitials(user.name) + '</div>' +
                        '<div class="user-cell-info">' +
                            '<span class="user-cell-name">' + user.name + '</span>' +
                            '<span class="user-cell-sub">ID: #' + String(user.id).padStart(4, '0') + '</span>' +
                        '</div>' +
                    '</div>' +
                '</td>' +
                '<td>' + user.email + '</td>' +
                '<td><span class="role-badge">' + user.role + '</span></td>' +
                '<td>' +
                    '<span class="status-badge status-' + user.status + '">' +
                        '<span class="status-dot"></span>' +
                        user.status.charAt(0).toUpperCase() + user.status.slice(1) +
                    '</span>' +
                '</td>' +
                '<td>' + formatDate(user.joined) + '</td>' +
                '<td>' +
                    '<div class="actions-cell">' +
                        '<button class="btn-icon edit" title="Edit user" onclick="editUser(' + user.id + ')">' +
                            '<i class="fas fa-pen"></i>' +
                        '</button>' +
                        '<button class="btn-icon delete" title="Delete user" onclick="deleteUser(' + user.id + ')">' +
                            '<i class="fas fa-trash"></i>' +
                        '</button>' +
                    '</div>' +
                '</td>';
            usersTableBody.appendChild(tr);
        });
    }

    // Update info
    document.getElementById('showingStart').textContent = filteredUsers.length > 0 ? start + 1 : 0;
    document.getElementById('showingEnd').textContent = Math.min(end, filteredUsers.length);
    document.getElementById('totalEntries').textContent = filteredUsers.length;

    renderPagination();
}

function renderPagination() {
    var totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
    var pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Previous button
    var prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    pagination.appendChild(prevBtn);

    // Page numbers
    for (var i = 1; i <= totalPages; i++) {
        (function (pageNum) {
            var pageBtn = document.createElement('button');
            pageBtn.className = 'page-btn' + (pageNum === currentPage ? ' active' : '');
            pageBtn.textContent = pageNum;
            pageBtn.addEventListener('click', function () {
                currentPage = pageNum;
                renderTable();
            });
            pagination.appendChild(pageBtn);
        })(i);
    }

    // Next button
    var nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    nextBtn.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    pagination.appendChild(nextBtn);
}

// ---- Table Search ----
if (tableSearch) {
    tableSearch.addEventListener('input', function () {
        var query = this.value.toLowerCase().trim();
        filteredUsers = usersData.filter(function (user) {
            return user.name.toLowerCase().includes(query) ||
                   user.email.toLowerCase().includes(query) ||
                   user.role.toLowerCase().includes(query) ||
                   user.status.toLowerCase().includes(query);
        });
        currentPage = 1;
        renderTable();
    });
}

// ---- Select All Checkbox ----
if (selectAll) {
    selectAll.addEventListener('change', function () {
        var checked = this.checked;
        document.querySelectorAll('.row-checkbox').forEach(function (cb) {
            cb.checked = checked;
        });
    });
}

// ---- Table Sorting ----
document.querySelectorAll('.sortable').forEach(function (th) {
    th.addEventListener('click', function () {
        var column = this.getAttribute('data-sort');

        if (sortColumn === column) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = column;
            sortDirection = 'asc';
        }

        // Update sort icons
        document.querySelectorAll('.sortable i').forEach(function (icon) {
            icon.className = 'fas fa-sort';
        });
        this.querySelector('i').className = 'fas fa-sort-' + (sortDirection === 'asc' ? 'up' : 'down');

        filteredUsers.sort(function (a, b) {
            var valA = a[column];
            var valB = b[column];

            if (typeof valA === 'string') {
                valA = valA.toLowerCase();
                valB = valB.toLowerCase();
            }

            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        currentPage = 1;
        renderTable();
    });
});

// ---- User Actions ----
function editUser(id) {
    var user = usersData.find(function (u) { return u.id === id; });
    if (user) {
        showToast('Editing user: ' + user.name, 'info');
    }
}

function deleteUser(id) {
    var user = usersData.find(function (u) { return u.id === id; });
    if (user) {
        showToast('User "' + user.name + '" deleted', 'success');
        var index = filteredUsers.findIndex(function (u) { return u.id === id; });
        if (index > -1) {
            filteredUsers.splice(index, 1);
        }
        var dataIndex = usersData.findIndex(function (u) { return u.id === id; });
        if (dataIndex > -1) {
            usersData.splice(dataIndex, 1);
        }
        var totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        }
        renderTable();
    }
}

// ---- Toast Notifications ----
function showToast(message, type) {
    type = type || 'info';
    var iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };

    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.innerHTML =
        '<i class="toast-icon ' + iconMap[type] + '"></i>' +
        '<span class="toast-message">' + message + '</span>' +
        '<button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>';

    toastContainer.appendChild(toast);

    setTimeout(function () {
        if (toast.parentElement) {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(function () { toast.remove(); }, 300);
        }
    }, 4000);
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', function () {
    renderTable();
    animateCounters();
    initCharts();
});
