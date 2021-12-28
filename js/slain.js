/*
Note from developer; I didn't tag functions because it was already messy enough trying to beautify the already
minfied file. Sorry. Most functions are already named, e.g. font, colors, and upgrades. So it shouldn't
be much of a problem.
 Below is the archive times to archive this file.

- 2x2
*/
/*
playback timings (ms):
  captures_list: 109.834
  CDXLines.iter: 22.024 (3)
  exclusion.robots: 0.214
  exclusion.robots.policy: 0.199
  RedisCDXSource: 3.619
  PetaboxLoader3.datanode: 109.619 (5)
  PetaboxLoader3.resolve: 69.879 (2)
  LoadShardBlock: 78.665 (3)
  esindex: 0.012
  load_resource: 165.473 (2)
*/
$(function() {
    function Da(a) {
        null == oa[a] && (a = "higher"), pa.target_color_id = a, pa.transition_progress = 0, pa.transition_active = !0
    }

    function Ea(a) {
        x = a, yc()
    }

    function Fa(a) {
        return Math.floor(j.width / 2 + (a - J[z].x - V) * v)
    }

    function Ga(a) {
        return Math.floor(j.height / 2 + (a - J[z].y - W) * v)
    }

    function Ha(a, b, c, d) {
        if (J[a].last_move_data = -1, ea)
            if (J[a].active) {
                var e = b - J[a].x,
                    f = c - J[a].y,
                    g = 60 / s;
                if (a == z) J[a].v_x += e / 50 * g, J[a].v_y += f / 50 * g, J[a].v_x < .01 && J[a].v_x > -.01 && J[a].v_y < .01 && J[a].v_y > -.01 ? J[a].hands_fix_animation_progress < 10 && J[a].hands_fix_animation_progress++ : J[a].hands_fix_animation_progress > 0 && (J[a].hands_fix_animation_progress -= 1);
                else {
                    J[a].v_x = e / 3, J[a].v_y = f / 3;
                    var h = d - J[a].rot;
                    Math.abs(h) > 5.5 ? (J[a].v_rot = 0, J[a].rot = d) : J[a].v_rot = h / 3
                }
            } else J[a].active = !0, J[a].x = b, J[a].y = c, J[a].rot = d, J[a].v_x = 0, J[a].v_y = 0, J[a].v_rot = 0
    }

    function Ia(a) {
        if (null == J[a.id]) a.hands_style = "circle", a.hands_color = "rgb(64, 64, 64)", a.healing > 0 && (a.hands_color = "rgb(0, 135, 0)"), a.radius_animation = !1, a.radius_animation_progress = 0, a.radius_animation_new_radius = 0, a.hands_radius_animation = !1, a.hands_radius_animation_progress = 0, a.hands_radius_animation_new_radius = 0, a.spawn_animation = !0, a.spawn_animation_progress = 0, a.leave = !1, a.leave_animation_progress = 0, a.text_animations = [], a.active = !1, a.type = "player", a.v_x = 0, a.v_y = 0, a.v_rot = 0, a.dist = 0, a.new_hp = a.hp, a.max_energy = 100, a.energy = 100, a.new_energy = 100, a.last_move_data = 0, a.attacking = !1, a.attacking_hand = "left", a.blocking = !1, a.animation_progress = 0, a.animation_ending = !1, a.hit_animation = !1, a.hit_animation_progress = 0, J[a.id] = a, K.push(a.id), L.push(a.id), J[a.id].spawn_protection_animation = !1, J[a.id].spawn_protection_animation_progress = !1, J[a.id].spawn_protection_ticks > 0 && Pa(a.id);
        else if (a.id == z) {
            J[z].map_level != a.map_level && (Da(Number(a.map_level)), Lb("Area " + a.map_level)), 0 == a.healing && (ja = !1);
            for (var b in a) "x" != b && "y" != b && "rot" != b && (J[a.id][b] = a[b])
        } else {
            J[a.id].leave = !1;
            for (var b in a) J[a.id][b] = a[b]
        }
    }

    function Ja(a) {
        null != J[a] && a != z && (J[a].active ? (J[a].leave = !0, J[a].leave_animation_progress = 0) : Ka(a))
    }

    function Ka(a) {
        null != J[a] && a != z && (O[a] = !0)
    }

    function La(a, b, c) {
        null != J[a] && (J[a].attacking = !1, 0 == b ? J[a].animation_ending = !0 : (J[a].animation_speed = Math.floor(c / (60 / s)), J[a].animation_progress = 0, J[a].blocking = !0, J[a].animation_ending = !1))
    }

    function Ma(a, b) {
        J[a].current_radius = b, a == z && (Ea(9 / (b + .4)), ga = 64 / (9 / (J[a].current_radius + .4)) * 1.2)
    }

    function Na(a, b) {
        J[a].radius_animation = !0, J[a].radius_animation_progress = 0, J[a].radius_animation_new_radius = b
    }

    function Oa(a, b) {
        if (null != J[a])
            if (J[a].active) {
                if (b < J[a].new_hp) {
                    J[a].hit_animation = !0, J[a].hit_animation_progress = 0;
                    var c = Math.ceil(J[a].new_hp - b);
                    c > 0 && $a(a, c)
                } else if (b > J[a].new_hp) {
                    var d = Math.ceil(b - J[a].new_hp);
                    d > 0 && _a(a, d)
                }
                J[a].new_hp = b
            } else J[a].new_hp = b, J[a].hp = b
    }

    function Pa(a) {
        J[a].active ? J[a].spawn_protection_animation = !0 : (J[a].spawn_protection_animation = !1, J[a].spawn_protection_animation_progress = 30)
    }

    function Qa(a) {
        J[a].active ? J[a].spawn_protection_animation = !0 : (J[a].spawn_protection_animation = !1, J[a].spawn_protection_animation_progress = 0), J[a].spawn_protection_ticks = 0
    }

    function Ra(a) {
        if (null == J[a.id]) {
            if (a.hands_style = "shape", a.hands_shape = ta, a.hands_color = "rgb(64, 64, 64)", a.centipede_loss_animation = !1, a.centipede_loss_animation_progress = 0, a.hands_fade_in_animation = !1, a.hands_fade_in_animation_progress = 0, a.spawn_animation = !0, a.spawn_animation_progress = 0, a.leave = !1, a.leave_animation_progress = 0, a.text_animations = [], a.active = !1, a.type = "monster", a.v_x = 0, a.v_y = 0, a.target_x = a.x, a.target_y = a.y, a.const_v_x = 0, a.const_v_y = 0, a.v_rot = 0, a.dist = 0, a.new_hp = a.hp, a.last_move_data = 0, a.charging = !1, a.attacking = !1, a.attacking_hand = "left", a.blocking = !1, a.animation_progress = 0, a.animation_ending = !1, a.hit_animation = !1, a.hit_animation_progress = 0, a.centipede_objects = [], a.centipede > 0)
                for (var b = 0; b < a.centipede; b++) a.centipede_objects.push(Wa(a));
            J[a.id] = a, K.push(a.id), M.push(a.id)
        }
    }

    function Sa(a) {
        null != J[a] && (J[a].active ? (J[a].leave = !0, J[a].leave_animation_progress = 0) : Ta(a))
    }

    function Ta(a) {
        null != J[a] && (O[a] = !0)
    }

    function Ua(a, b, c, d) {
        if (ea)
            if (J[a].last_move_data = -1, J[a].active) {
                var e = b - J[a].x,
                    f = c - J[a].y;
                J[a].target_x = b, J[a].target_y = c, J[a].const_v_x = (e / 21 - J[a].v_x) / 8, J[a].const_v_y = (f / 21 - J[a].v_y) / 8, d < 0 && (d = 2 * Math.PI + d);
                var h = d - J[a].rot;
                h > Math.PI ? h -= 2 * Math.PI : h < -Math.PI && (h += 2 * Math.PI), J[a].v_rot = h / 21
            } else {
                J[a].active = !0, J[a].x = b, J[a].y = c, J[a].rot = d, J[a].target_x = b, J[a].target_y = c, J[a].v_x = 0, J[a].v_y = 0, J[a].v_rot = 0;
                for (var i = 0; i < J[a].centipede_objects.length; i++) J[a].centipede_objects[i].x = J[a].x + (i + 1) * (.5 * J[a].current_radius), J[a].centipede_objects[i].y = J[a].y
            }
    }

    function Va(a, b) {
        if (null != J[a])
            if (J[a].active) {
                if (b < J[a].new_hp) {
                    J[a].hit_animation = !0, J[a].hit_animation_progress = 0;
                    var c = Math.ceil(J[a].new_hp - b);
                    c > 0 && $a(a, c)
                } else if (b > J[a].new_hp && 2 != J[a].monster_type) {
                    var d = Math.ceil(b - J[a].new_hp);
                    d > 0 && _a(a, d)
                }
                J[a].new_hp = b
            } else J[a].new_hp = b, J[a].hp = b
    }

    function Wa(a) {
        var b = a.x + (a.centipede_objects.length + 1) * (.5 * a.current_radius),
            c = a.y,
            d = a.rot,
            e = {
                x: b,
                y: c,
                rot: d
            };
        return e
    }

    function Xa(a) {
        null == J[a.id] && (a.spawn_animation = !0, a.spawn_animation_progress = 0, a.type = "food", a.r = 40 + Math.floor(200 * Math.random()), a.g = 40 + Math.floor(70 * Math.random()), a.b = 40 + Math.floor(200 * Math.random()), a.random_movement_x_speed = 3 + 6 * Math.random(), a.random_movement_x = 240 + 120 * Math.random(), a.random_movement_y_speed = 3 + 6 * Math.random(), a.random_movement_y = 240 + 120 * Math.random(), a.random_size_change_speed = 10 + 10 * Math.random(), J[a.id] = a, K.push(a.id), N.push(a.id))
    }

    function Ya(a) {
        if (null != J[a]) {
            var b = N.indexOf(a);
            b != -1 && N.splice(b, 1), delete J[a]
        }
    }

    function Za(a, b) {
        null != J[a] && (J[a].blocking = !1, J[a].attacking = !0, J[a].animation_progress = 0, J[a].animation_speed = Math.floor(b / (60 / s)), J[a].animation_ending = !1, "left" == J[a].attacking_hand ? J[a].attacking_hand = "right" : J[a].attacking_hand = "left")
    }

    function $a(a, b) {
        var c = 18 + b / 2;
        c > 80 && (c = 80), J[a].text_animations.push({
            text: b,
            color: {
                r: 230,
                g: 0,
                b: 0,
                a: 1
            },
            progress: 0,
            duration: 34,
            distance: .04,
            font_size: c
        })
    }

    function _a(a, b) {
        var c = 18 + b / 2;
        c > 80 && (c = 80);
        var d = "+" + b;
        J[a].text_animations.push({
            text: d,
            color: {
                r: 0,
                g: 165,
                b: 0,
                a: 1
            },
            progress: 0,
            duration: 55,
            distance: .04,
            font_size: c
        })
    }

    function ab() {
        for (var a in O) {
            var b = K.indexOf(a);
            if (b != -1 && K.splice(b, 1), "player" == J[a].type) {
                var b = L.indexOf(a);
                b != -1 && L.splice(b, 1)
            } else if ("monster" == J[a].type) {
                var b = M.indexOf(a);
                b != -1 && M.splice(b, 1)
            }
            delete J[a]
        }
        O = {}
    }

    function hb(a, b) {
        for (var c = [
                [Math.cos(b), -Math.sin(b)],
                [Math.sin(b), Math.cos(b)]
            ], d = [], e = 0; e < a.length; ++e) d[e] = [c[0][0] * a[e][0] + c[0][1] * a[e][1], c[1][0] * a[e][0] + c[1][1] * a[e][1]];
        return d
    }

    function ib(a, b) {
        for (var c = b * Math.tan(Math.PI / a) * 7, d = [
                [0, b],
                [c / 2, 0],
                [-c / 2, 0],
                [0, b]
            ], e = [], f = 0; f < a; ++f) e[f] = hb(d, f * (2 * Math.PI / a));
        return e
    }

    function jb(a, b, c, d) {
        for (var e = d ? -1 : 1, f = 0; f < b.length; ++f) {
            var g = b[f];
            a.moveTo(g[0][0] + c[0], e * g[0][1] + c[1]), a.beginPath();
            for (var h = 1; h < g.length; ++h) a.lineTo(g[h][0] + c[0], e * g[h][1] + c[1]);
            a.fill()
        }
    }

    function kb(a, b) {
        if (!(a < 3)) {
            var c = [
                    [
                        [0, 0]
                    ]
                ],
                d = 2 * Math.PI / a;
            d = b ? -d : d;
            for (var e = 0; e < a; e++) {
                var f = Math.cos(d * e - Math.PI / 2),
                    g = Math.sin(d * e - Math.PI / 2);
                c[0].push([f, g])
            }
            return c
        }
    }

    function lb() {
        var a = "get_servers",
            b = {};
        $.post("api/api.php", {
            action: a,
            data: b
        }, function(a) {
            if ("null" != a) {
                a = JSON.parse(a), c = {};
                for (var b = 0; b < a.length; b++) c[a[b].server_id] = a[b];
                mb()
            }
        })
    }

    function mb() {
        var a = {};
        for (var b in c) {
            var f = Number(c[b].game_mode);
            f == ya && (a[c[b].server_id] = c[b])
        }
        Ba = {};
        for (var b in a) {
            var g = a[b].category;
            null == Ba[g] && (Ba[g] = {
                players: 0,
                max_players: 0,
                list: []
            }), Ba[g].list.push(a[b].server_id), 0 != a[b].status && (Ba[g].players += Number(a[b].players), Ba[g].max_players += Number(a[b].max_players))
        }
        if (null == d || "category" != d && null == c[d]) {
            d = "category";
            for (var b in Ba) {
                e = b;
                break
            }
        }
        $("#select_server_head").html(""), $("#select_server_body").html("");
        for (var b in Ba) {
            var h = " (" + Ba[b].players + " Players)",
                i = [],
                g = b;
            "Brazil" == b && (g += '<a class="gd" href="https://web.archive.org/web/20180224041038/https://www.youtube.com/user/SirGodenot" target="_blank"></a>');
            var j = "";
            Ca == b && (j = "server-item-category-expanded"), Number(Ba[b].players) >= Number(Ba[b].max_players) && i.push("server-bad"), "category" == d && e == b && i.push("server-item-selected"), i = i.join(" ");
            var k = '<div class="server-item-category ' + j + '"><div data-category="' + b + '" class="server-item ' + i + '"><div class="server-item-category-name"><b>' + g + " </b>" + h + '</div><div class="server-item-category-toggle">&#x25BC;</div></div><div class="server-item-category-list"></div></div>';
            $("#select_server_body").append(k);
            for (var l = $(".server-item-category").last(), m = l.find(".server-item-category-list"), n = 0; n < Ba[b].list.length; n++) {
                var o = Ba[b].list[n];
                h = "", i = [], h = 0 == Number(c[o].status) ? " (Offline)" : " (" + c[o].players + "/" + c[o].max_players + ")", (0 == Number(c[o].status) || Number(c[o].players) >= Number(c[o].max_players)) && i.push("server-bad"), d == o && i.push("server-item-selected"), i = i.join(" "), k = '<div data-sid="' + o + '" class="server-item ' + i + '">' + c[o].name + h + "</div>", m.append(k)
            }
        }
        nb(), $(".server-item-category-toggle").off().mousedown(function(a) {
            var b = $(this).parent().parent();
            $(".server-item-category").not(b).removeClass("server-item-category-expanded"), b.toggleClass("server-item-category-expanded"), Ca = b.hasClass("server-item-category-expanded") ? $(this).parent().attr("data-category") : "", a.stopPropagation()
        }), $(".server-item").off().mousedown(function() {
            var a = $(this).attr("data-sid"),
                b = $(this).attr("data-category");
            $(".server-item").removeClass("server-item-selected"), $(this).addClass("server-item-selected"), null != b ? (d = "category", e = b, nb()) : null != a && (d = a, nb()), $("#select_server_container").removeClass("server-list-active")
        }), $(".server-item a").off().mousedown(function(a) {
            a.stopPropagation()
        })
    }

    function nb() {
        if ($("#select_server_head").removeClass(), "category" == d) {
            var a = $('.server-item[data-category="' + e + '"]'),
                b = a.find(".server-item-category-name").html();
            $("#select_server_head").html(b), a.hasClass("server-bad") && $("#select_server_head").addClass("server-bad")
        } else {
            var a = $('.server-item[data-sid="' + d + '"]'),
                b = a.html();
            $("#select_server_head").html(b), a.hasClass("server-bad") && $("#select_server_head").addClass("server-bad")
        }
    }

    function ob() {
        for (var a = [], b = 0; b < Ba[e].list.length; b++) {
            var d = Ba[e].list[b];
            if (0 != Number(c[d].status) && Number(c[d].players) < Number(c[d].max_players)) {
                var f = Number(c[d].max_players) - Number(c[d].players);
                a.push({
                    id: d,
                    free_slots: f
                })
            }
        }
        if (0 == a.length) return null;
        a = a.sort(pb);
        for (var g = .8, b = 0; b < a.length; b++) {
            var h = a[b].id;
            if (b + 1 == a.length) return h;
            var i = Number(c[h].players) / Number(c[h].max_players);
            if (i <= g) return h
        }
        return null
    }

    function pb(a, b) {
        return a.free_slots > b.free_slots ? -1 : a.free_slots < b.free_slots ? 1 : 0
    }

    function qb(a) {
        ya = a, d = null, e = null, Ca = "", mb()
    }

    function rb() {
        $("#game_ui").fadeOut(300), $("#main_menu_container").hide(), $("#ads").hide(), $("#summary_container").show(), $("#menu_container").fadeIn(300)
    }

    function sb() {
        $("#menu_container").fadeOut(300), $("#game_ui").fadeIn(300)
    }

    function ub(a, b) {
        clearTimeout(tb);
        var c = $("#menu_message");
        c.hide(), "success" == a ? (c.removeClass("menu-message-error"), c.addClass("menu-message-success")) : "error" == a && (c.removeClass("menu-message-success"), c.addClass("menu-message-error")), c.html(b), c.fadeIn(100), tb = setTimeout(function() {
            c.fadeOut(100)
        }, 6e3)
    }

    function vb(a) {
        var b = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return b.test(a)
    }

    function wb() {
        var a = "get_info",
            b = {};
        $.post("api/api.php", {
            action: a,
            data: b
        }, function(a) {
            "0" != a && "" != a ? (o = !0, n = JSON.parse(a), $("#menu_logged_in_points").text(n.points), $("#menu_logged_in_lvl").text(n.highest_lvl), $("#menu_logged_in_nick").text(n.nick), $(".menu-page").hide(), $("#menu_logged_in").show()) : ($(".menu-page").hide(), $("#menu_not_logged_in").show(), $("#menu_not_logged_in_main").show())
        })
    }

    function xb() {
        var a = "get_ranking",
            b = {};
        $.post("api/api.php", {
            action: a,
            data: b
        }, function(a) {
            var b = JSON.parse(a);
            $("#ranking_points tbody").empty();
            for (var c = 0; c < 20; c++) {
                var d = "",
                    e = "<br>";
                null != b[0][c] && (d = b[0][c].nick, e = b[0][c].points, e = "Score: " + e);
                var f = "<tr><td>" + (c + 1) + "</td><td><div class='ranking-nick'>" + d + "</div><br>" + e + "</td></tr>";
                $("#ranking_points tbody").append(f)
            }
            $("#ranking_highest_lvl tbody").empty();
            for (var c = 0; c < 20; c++) {
                var d = "",
                    g = "<br>";
                null != b[1][c] && (d = b[1][c].nick, g = b[1][c].highest_lvl, g = "Level: " + g);
                var f = "<tr><td>" + (c + 1) + "</td><td><div class='ranking-nick'>" + d + "</div><br>" + g + "</td></tr>";
                $("#ranking_highest_lvl tbody").append(f)
            }
        })
    }

    function yb(b, c) {
        c = Number(c), b = Number(b);
        var d = null;
        for (var e in va)
            if (null != va[e] && va[e].id == c) {
                d = Number(e);
                break
            } if (null != d && d != b) {
            va[d].id = va[b].id;
            var f = $(".options-skill[data-slot-id=" + d + "]");
            f.find(".options-skill-name").text(a.skills[va[d].id].name)
        }
        va[b] = {
            id: c,
            points: 0
        };
        var f = $(".options-skill[data-slot-id=" + b + "]");
        f.find(".options-skill-name").text(a.skills[c].name)
    }

    function zb() {
        yb(1, 0), yb(2, 1), yb(3, 2), yb(4, 3), yb(5, 4), yb(6, 5), yb(7, 6), yb(8, 10), yb(9, 7)
    }

    function Ab(b) {
        $("#options_change_skill_container").empty();
        for (var c in a.skills) a.skills[c].type == b && c != va[wa].id && $("#options_change_skill_container").append('<div data-id="' + c + '" class="options-item options-change-skill">' + a.skills[c].name + "</div>");
        $(".options-change-skill").click(function() {
            var a = $(this).attr("data-id");
            yb(wa, a), $("#options_change_skill").fadeOut(300), $("#options").fadeIn(300)
        }), $(".options-change-skill").hover(function() {
            var b = Number($(this).attr("data-id"));
            $("#options_skill_info .popup-content").html('<div class="options-skill-info-name">' + a.skills[b].name + '</div><div class="options-skill-info-description">' + a.skills[b].description), $("#options_skill_info").stop().fadeIn(100)
        }, function() {
            $("#options_skill_info").stop().fadeOut(100)
        })
    }

    function Bb(a) {
        va[a].points++, J[z].available_stats_points--, Cb(), Db(a), Eb()
    }

    function Cb() {
        J[z].available_stats_points > 0 ? $("#skill_menu").addClass("stats-adding-on") : $("#skill_menu").removeClass("stats-adding-on");
        for (var b = 1; b <= 9; b++) va[b].points >= a.skills[va[b].id].limit ? $(".stats[data-id='" + b + "']").addClass("stats-max") : $(".stats[data-id='" + b + "']").removeClass("stats-max")
    }

    function Db(b) {
        var c = $(".stats[data-id=" + b + "]");
        c.find(".stats-value").text(a.skills[va[b].id].getFormattedVal(va[b].points))
    }

    function Eb() {
        if (null != ra) {
            var b = va[ra].id,
                c = va[ra].points;
            $("#skill_info_name").text(a.skills[b].name);
            var d = a.skills[b].getFormattedVal(c),
                e = a.skills[b].getFormattedVal(c + 1);
            $("#skill_info_current .skill-info-value").html(d), $("#skill_info_current .skill-info-amount").html(c), c >= a.skills[b].limit ? ($("#skill_info_next .skill-info-value").html(""), $("#skill_info_next .skill-info-amount").html('<span style="color: rgb(255, 180, 180)">MAX</span>')) : ($("#skill_info_next .skill-info-value").html(e), $("#skill_info_next .skill-info-amount").html(c + 1))
        }
    }

    function Fb() {
        for (var b = 1; b <= 9; b++) {
            var c = $(".stats[data-id=" + b + "]");
            c.find(".stats-name").text(a.skills[va[b].id].name), c.find(".stats-value").text(a.skills[va[b].id].getFormattedVal(va[b].points))
        }
        Cb()
    }

    function Gb(a, b, c) {
        return 100 * (b / 100 - 100 / (100 / (b / 100) + a * c))
    }

    function Hb(a) {
        var b = $("#top_levels .game-ui-ranking");
        b.empty();
        for (var c = 0; c < a[0].length; c++) {
            var d = "",
                e = "";
            0 != a[0][c].length && (e = "(" + a[0][c][1] + ")", d = a[0][c][0], "" == d && (d = "Unnamed player")), b.append("<div>" + (c + 1) + '. <span class="game-ui-ranking-details">' + e + "</span> " + d + "</div>")
        }
        var b = $("#top_player_kills .game-ui-ranking");
        b.empty();
        for (var c = 0; c < a[1].length; c++) {
            var d = "",
                f = "";
            0 != a[1][c].length && (f = "(" + a[1][c][1] + ")", d = a[1][c][0], "" == d && (d = "Unnamed player")), b.append("<div>" + (c + 1) + '. <span class="game-ui-ranking-details">' + f + "</span> " + d + "</div>")
        }
    }

    function Jb(a) {
        clearTimeout(Ib), $("#game_message_text").text(a), $("#game_message").hide().fadeIn(500), Ib = setTimeout(function() {
            $("#game_message").fadeOut(500)
        }, 4e3)
    }

    function Lb(a) {
        clearTimeout(Kb), $("#game_message_big").hide().text(a).fadeIn(1e3), Kb = setTimeout(function() {
            $("#game_message_big").fadeOut(1e3)
        }, 2300)
    }

    function Mb(a) {
        $(".meter > span").each(function() {
            $(this).data("origWidth", $(this).width()).animate({
                width: a + "%"
            }, 500)
        })
    }

    function Nb(a) {
        $(".meter > span").css("width", a + "%")
    }

    function Ob(a, d, e, f) {
        i = !0, g = null, g = io.connect(c[a].ip, {
            reconnection: !1,
            "connect timeout": 5e3
        }), g.on("connect", function() {
            g.on("server_full", function(a) {
                ub("error", "Server is full.")
            }), g.on("outdated_version", function(a) {
                ub("error", "Your game version is outdated. Please, refresh the page.")
            }), g.on("sd", function(a) {
                g.on("d", function(a) {
                    Pb(a)
                }), g.on("md", function(a) {
                    Qb(a)
                }), g.on("e", function(a) {
                    J[z].new_energy = a
                }), g.on("rp", function(a) {
                    null != J[a[0]] && a[1] == J[z].map_level && Ja(a[0])
                }), g.on("exp", function(a) {
                    Mb(a)
                }), g.on("lvl", function(a) {
                    var b = a[0] - J[z].level;
                    J[z].available_stats_points += b, Cb(), J[z].level = a[0], !qa && J[z].level >= 10 && 1 == J[z].map_level && (qa = !0, Jb("TIP: You can go right to enter the next area.")), Mb(a[1]), $("#level").text(a[0])
                }), g.on("s", function(a) {
                    Bb(a)
                }), g.on("sp", function(a) {
                    J[z].speed = a
                }), g.on("me", function(a) {
                    J[z].max_energy = a[0], J[z].energy = a[1], J[z].new_energy = a[1]
                }), g.on("m_slain", function(a) {
                    ja = !0
                }), g.on("top", function(a) {
                    Hb(a)
                }), g.on("summary", function(a) {
                    aa = !0, ba = a, g.emit("end")
                }), g.on("thlvl", function(a) {
                    Jb("You are too strong to get exp. Please, go to the next area.")
                }), g.on("pts", function(a) {
                    Jb("This player is too strong for you.")
                }), g.on("ptw", function(a) {
                    Jb("This player is too weak for you.")
                }), Rb(a)
            }), g.emit("n", {
                n: d,
                k: e,
                v: b,
                s: f
            })
        }), g.on("disconnect", function() {
            h = !1, i = !1, aa ? ($("#summary_lvl").text(ba.lvl), $("#summary_points").text(ba.points), o && (ba.lvl > n.highest_lvl && $("#menu_logged_in_lvl").text(ba.lvl), n.points = String(ba.points + Number(n.points)), $("#menu_logged_in_points").text(n.points)), rb(), aa = !1) : ($("#game_ui").hide(), $("#main_menu_container").show(), $("#ads").show(), $("#menu_container").show()), lb(), null == ma && (ma = setInterval(lb, 2e3))
        }), g.on("connect_error", function() {
            h = !1, i = !1, ub("error", "Can't connect to the server.")
        }), g.on("reconnect_failed", function() {})
    }

    function Pb(a) {
        for (var b = 0; b < a.a.length; b++) {
            var c = a.a[b][0].charCodeAt();
            if (0 == c) {
                var d = {
                    id: a.a[b][1],
                    type: a.a[b][2],
                    x: a.a[b][3],
                    y: a.a[b][4],
                    rot: a.a[b][5],
                    armor: a.a[b][6],
                    current_radius: a.a[b][7],
                    current_hands_radius: a.a[b][8],
                    map_level: a.a[b][9],
                    nick: a.a[b][10],
                    hp: a.a[b][11],
                    max_hp: a.a[b][12],
                    healing: a.a[b][13],
                    spawn_protection_ticks: a.a[b][14]
                };
                Ia(d)
            } else if (1 == c) Ja(a.a[b][1]);
            else if (2 == c) Za(a.a[b][1], a.a[b][2]);
            else if (3 == c) La(a.a[b][1], 1, a.a[b][2]);
            else if (4 == c) La(a.a[b][1], 0);
            else if (5 == c) Oa(a.a[b][1], a.a[b][2]);
            else if (6 == c) {
                var e = a.a[b][1];
                null != J[e] && (J[e].max_hp = a.a[b][3], J[e].new_hp = a.a[b][2], J[e].hp = a.a[b][2], Na(e, a.a[b][4]))
            } else if (7 == c) {
                var e = a.a[b][1];
                null != J[e] && (J[e].armor = a.a[b][2])
            } else if (8 == c) {
                var e = a.a[b][1];
                null != J[e] && (J[e].dmg = a.a[b][2], J[e].hands_radius_animation_new_radius = a.a[b][3], J[e].hands_radius_animation = !0, J[e].hands_radius_animation_progress = 0)
            } else if (9 == c) {
                var e = a.a[b][1];
                null != J[e] && Qa(e)
            }
            if (100 == c) {
                var d = {
                    id: a.a[b][1],
                    type: a.a[b][2],
                    x: a.a[b][3],
                    y: a.a[b][4],
                    rot: a.a[b][5],
                    armor: a.a[b][6],
                    current_radius: a.a[b][7],
                    current_hands_radius: a.a[b][8],
                    map_level: a.a[b][9],
                    hp: a.a[b][10],
                    max_hp: a.a[b][11],
                    tier: a.a[b][12],
                    monster_type: a.a[b][13],
                    centipede: a.a[b][14]
                };
                Ra(d)
            } else if (101 == c) Sa(a.a[b][1]);
            else if (102 == c) null != J[a.a[b][1]] && (J[a.a[b][1]].charging = !0);
            else if (103 == c) null != J[a.a[b][1]] && (J[a.a[b][1]].charging = !1);
            else if (104 == c) Va(a.a[b][1], a.a[b][2]);
            else if (105 == c) Za(a.a[b][1], a.a[b][2]);
            else if (106 == c && null != J[a.a[b][1]]) {
                J[a.a[b][1]].centipede = a.a[b][2], J[a.a[b][1]].centipede_loss_animation || (J[a.a[b][1]].centipede_loss_animation_progress = 0, J[a.a[b][1]].centipede_loss_animation = !0);
                var f = Math.ceil(J[a.a[b][1]].hp);
                f > 0 && $a(a.a[b][1], f)
            }
            if (200 == c) {
                var d = {
                    id: a.a[b][1],
                    type: a.a[b][2],
                    x: a.a[b][3],
                    y: a.a[b][4]
                };
                Xa(d)
            }
            201 == c && Ya(a.a[b][1])
        }
        for (var b = 0; b < a.m.length; b++) null != J[a.m[b][0]] && ("player" == J[a.m[b][0]].type ? Ha(a.m[b][0], a.m[b][1], a.m[b][2], a.m[b][3]) : "monster" == J[a.m[b][0]].type && Ua(a.m[b][0], a.m[b][1], a.m[b][2], a.m[b][3]));
        for (var b = 0; b < L.length; b++) {
            var e = L[b];
            J[e].active && !J[e].leave && (J[e].last_move_data++, J[e].last_move_data > 0 && (J[e].active = !1, J[e].hp = J[e].new_hp))
        }
        for (var b = 0; b < M.length; b++) {
            var e = M[b];
            J[e].active && !J[e].leave && (J[e].last_move_data++, J[e].last_move_data > 9 && (J[e].active = !1, J[e].hp = J[e].new_hp))
        }
    }

    function Qb(a) {
        for (var b = 0; b < K.length; b++) {
            var c = K[b];
            c != z && delete J[c]
        }
        O = {}, K = [], L = [], M = [], N = [], null != J[z] && (K = [z], L = [z]);
        for (var b = 0; b < a.spawn.players.length; b++) {
            var d = {
                id: a.spawn.players[b][1],
                type: a.spawn.players[b][2],
                x: a.spawn.players[b][3],
                y: a.spawn.players[b][4],
                rot: a.spawn.players[b][5],
                armor: a.spawn.players[b][6],
                current_radius: a.spawn.players[b][7],
                current_hands_radius: a.spawn.players[b][8],
                map_level: a.spawn.players[b][9],
                nick: a.spawn.players[b][10],
                hp: a.spawn.players[b][11],
                max_hp: a.spawn.players[b][12],
                healing: a.spawn.players[b][13],
                spawn_protection_ticks: a.spawn.players[b][14]
            };
            Ia(d)
        }
        for (var b = 0; b < a.spawn.monsters.length; b++) {
            var d = {
                id: a.spawn.monsters[b][1],
                type: a.spawn.monsters[b][2],
                x: a.spawn.monsters[b][3],
                y: a.spawn.monsters[b][4],
                rot: a.spawn.monsters[b][5],
                armor: a.spawn.monsters[b][6],
                current_radius: a.spawn.monsters[b][7],
                current_hands_radius: a.spawn.monsters[b][8],
                map_level: a.spawn.monsters[b][9],
                hp: a.spawn.monsters[b][10],
                max_hp: a.spawn.monsters[b][11],
                tier: a.spawn.monsters[b][12],
                monster_type: a.spawn.monsters[b][13],
                centipede: a.spawn.monsters[b][14]
            };
            Ra(d)
        }
        for (var b = 0; b < a.spawn.food.length; b++) {
            var d = {
                id: a.spawn.food[b][1],
                type: a.spawn.food[b][2],
                x: a.spawn.food[b][3],
                y: a.spawn.food[b][4]
            };
            Xa(d)
        }
    }

    function Rb(a) {
        null != ma && (clearInterval(ma), ma = null), ja = !1, aa = !1, ba = {
            points: 0,
            lvl: 0
        }, F = {
            up: !1,
            down: !1,
            left: !1,
            right: !1,
            attack: !1,
            block: !1
        }, K = [], L = [], M = [], N = [], J = {}, O = {}, z = a[0], Qb(a[1]), P = a[2], Q = a[3], Ac(), J[z].speed = a[4], xa = a[5], 0 == xa ? (J[z].level = 1, J[z].available_stats_points = 0) : 1 == xa && (J[z].level = a[6][2], J[z].available_stats_points = a[6][2] - 1, za = a[6][0], Aa = a[6][1]), J[z].energy = 200, J[z].hands_fix_animation_progress = 10, J[z].exp = 0;
        for (var b = 1; b <= 9; b++) va[b].points = 0;
        Fb(), ra = null, $("#level").text("1"), $("#top_levels .game-ui-ranking").empty().html("<div>1.</div><div>2.</div><div>3.</div><div>4.</div><div>5.</div>"), $("#top_player_kills .game-ui-ranking").empty().html("<div>1.</div><div>2.</div><div>3.</div><div>4.</div><div>5.</div>"), "" == J[z].nick ? $("#game_nick").text("Unnamed player") : $("#game_nick").text(J[z].nick), Da(1), Ma(z, J[z].current_radius), ja = 0 != J[z].healing, Nb(0), h = !0, sb()
    }

    function Sb(b) {
        if (h)
            if (H.indexOf(b) != -1) 87 == b || 38 == b ? (g.emit("kd", "up"), F.up = !0) : 83 == b || 40 == b ? (g.emit("kd", "down"), F.down = !0) : 65 == b || 37 == b ? (g.emit("kd", "left"), F.left = !0) : 68 == b || 39 == b ? (g.emit("kd", "right"), F.right = !0) : 88 == b && (g.emit("md", "block"), F.block = !0);
            else if (J[z].available_stats_points > 0 && $("#skill_menu").hasClass("stats-adding-on"))
            if (b >= 49 && b <= 57) {
                var c = Number(b - 48),
                    d = va[c].id;
                if (va[c].points >= a.skills[d].limit) return;
                g.emit("s", c), $("#skill_menu").removeClass("stats-adding-on")
            } else if (b >= 97 && b <= 105) {
            var c = Number(b - 96),
                d = va[c].id;
            if (va[c].points >= a.skills[d].limit) return;
            g.emit("s", c), $("#skill_menu").removeClass("stats-adding-on")
        }
    }

    function Tb(a) {
        h && H.indexOf(a) != -1 && (87 == a || 38 == a ? (g.emit("ku", "up"), F.up = !1) : 83 == a || 40 == a ? (g.emit("ku", "down"), F.down = !1) : 65 == a || 37 == a ? (g.emit("ku", "left"), F.left = !1) : 68 == a || 39 == a ? (g.emit("ku", "right"), F.right = !1) : 88 == a && (g.emit("mu", "block"), F.block = !1))
    }

    function Ub(a) {
        h && I.indexOf(a) != -1 && (1 == a && (g.emit("md", "attack"), F.attack = !0), 3 == a && (g.emit("md", "block"), F.block = !0))
    }

    function Vb(a) {
        h && I.indexOf(a) != -1 && (1 == a && (g.emit("mu", "attack"), F.attack = !1), 3 == a && (g.emit("mu", "block"), F.block = !1))
    }

    function $b() {
        Wb += .006, Xb += .006, Yb++, menu_zoom = 2 * Math.sin(Yb / 250) + 12, Zb++, Ea(menu_zoom), k.fillStyle = "rgb(" + Math.floor(pa.r) + ", " + Math.floor(pa.g) + ", " + Math.floor(pa.b) + ")", k.fillRect(0, 0, j.width, j.height), _b()
    }

    function _b() {
        k.strokeStyle = "rgba(0, 0, 0, 0.14)";
        var a = 1,
            b = Math.ceil(j.width / v) + 1,
            c = Math.ceil(j.height / v) + 1,
            d = (j.width / 2 - Wb * v) % v,
            e = (j.height / 2 - Xb * v) % v;
        k.lineWidth = a, k.beginPath();
        for (var f = 0; f < b; f++) k.moveTo(f * v + .5 + d, .5), k.lineTo(f * v + .5 + d, j.height + .5);
        for (var g = 0; g < c; g++) k.moveTo(.5, g * v + .5 + e), k.lineTo(j.width + .5, g * v + .5 + e);
        k.stroke()
    }

    function ac(a) {
        return Math.floor((a - J[z].x) * v) / (14 * t) + 120
    }

    function bc(a) {
        return Math.floor((a - J[z].y) * v) / (14 * t) + 120
    }

    function cc() {
        if (m.clearRect(0, 0, l.width, l.height), m.fillStyle = "rgb(64, 64, 64)", 0 == xa) {
            for (var a = J[z].map_level - 1; a <= J[z].map_level + 1; a++)
                if (0 != a) {
                    var b = P + (a - 1) * Q,
                        c = P * a + (a - 1) * a / 2 * Q - b;
                    1 == a && m.fillRect(ac(0), bc(-T / 2), -T * v / (14 * t), T * v / (14 * t)), m.fillRect(ac(c) - 1, bc(-(a - 1) * Q / 2), b * v / (14 * t) + 2, -T * v / (14 * t)), m.fillRect(ac(c) - 1, bc(b - (a - 1) * Q / 2), b * v / (14 * t) + 2, T * v / (14 * t))
                }
        } else 1 == xa && (m.fillRect(ac(0), bc(-T / 2), -T * v / (14 * t), T * v / (14 * t)), m.fillRect(ac(za), bc(-T / 2), T * v / (14 * t), T * v / (14 * t)), m.fillRect(ac(0) - 1, bc(0), za * v / (14 * t) + 2, -T * v / (14 * t)), m.fillRect(ac(0) - 1, bc(Aa), za * v / (14 * t) + 2, T * v / (14 * t)));
        m.fillStyle = "rgba(255, 255, 0, 1)";
        for (var d = 0; d < N.length; d++) {
            var e = N[d];
            if (null != J[e]) {
                var f = ac(J[e].x),
                    g = bc(J[e].y);
                f >= 0 && f <= 240 && g >= 0 && g <= 240 && (m.beginPath(), m.arc(f, g, 1 + x / 15, 0, 2 * Math.PI), m.fill())
            }
        }
        m.fillStyle = "rgba(225, 0, 0, 1)";
        for (var d = 0; d < M.length; d++) {
            var e = M[d];
            if (null != J[e] && J[e].active) {
                var f = ac(J[e].x),
                    g = bc(J[e].y);
                m.beginPath(), m.arc(f, g, J[e].current_radius * x + 3, 0, 2 * Math.PI), m.fill()
            }
        }
        m.fillStyle = "rgba(0, 70, 0, 1)";
        for (var d = 0; d < L.length; d++) {
            var e = L[d];
            if (null != J[e] && e != z && J[e].active) {
                var f = ac(J[e].x),
                    g = bc(J[e].y);
                m.beginPath(), m.arc(f, g, J[e].current_radius * x + 4, 0, 2 * Math.PI), m.fill()
            }
        }
        m.fillStyle = "rgba(0, 0, 0, 1)", m.beginPath(), m.arc(120, 120, J[z].current_radius * x + 4, 0, 2 * Math.PI), m.fill()
    }

    function dc(a, b) {
        var c = .3 * b,
            d = 32 * (Math.PI / 180),
            e = .5 * c,
            f = Math.sin(J[a].rot - d) * b * .6,
            g = -Math.cos(J[a].rot - d) * b * .6,
            h = Math.sin(J[a].rot + d) * b * .6,
            i = -Math.cos(J[a].rot + d) * b * .6,
            j = 1.15 * f + Math.cos(J[a].rot) * b * .09,
            l = 1.15 * g + Math.sin(J[a].rot) * b * .09,
            m = 1.15 * h - Math.cos(J[a].rot) * b * .09,
            n = 1.15 * i - Math.sin(J[a].rot) * b * .09,
            o = 1 - .7 * Math.sin(J[a].hit_animation_progress / 12 * Math.PI),
            p = J[a].rot + Math.PI / 2 + Math.PI * (1 - o),
            q = p + 2 * Math.PI * o;
        k.fillStyle = "rgb(255, 255, 255)", k.beginPath(), k.arc(Fa(J[a].x) + f, Ga(J[a].y) + g, c, p, q), k.fill(), k.beginPath(), k.arc(Fa(J[a].x) + h, Ga(J[a].y) + i, c, p, q), k.fill(), k.fillStyle = Z, k.beginPath(), k.arc(Fa(J[a].x) + j, Ga(J[a].y) + l, e, p, q), k.fill(), k.beginPath(), k.arc(Fa(J[a].x) + m, Ga(J[a].y) + n, e, p, q), k.fill()
    }

    function ec(a, b) {
        if (null != J[a].hands_style) {
            var c = J[a].current_hands_radius * v;
            J[a].spawn_animation && (c *= J[a].spawn_animation_progress / 20), J[a].leave && (c *= (20 - J[a].leave_animation_progress) / 20), J[a].hands_fade_in_animation && (c *= J[a].hands_fade_in_animation_progress / 10);
            var d = 20,
                e = 16,
                f = 24,
                g = 1,
                h = 1,
                i = 1,
                j = 1,
                l = 0,
                m = 0,
                n = J[a].animation_progress / J[a].animation_speed,
                o = 1.1;
            J[a].attacking ? "left" == J[a].attacking_hand ? (g = 1 + .9 * n, h = 1 + .9 * n, l = 1.6 * n) : (i = 1 + .9 * n, j = 1 + .9 * n, m = -(1.6 * n)) : J[a].blocking && (d = 20 + 49 * n);
            var p = Math.sin(J[a].dist * e) * f,
                q = J[a].rot - (90 + p - d) * (Math.PI / 180),
                r = J[a].rot - (90 + p + d) * (Math.PI / 180),
                s = Math.sin(q + l) * (b + c) * o * g,
                t = -Math.cos(q + l) * (b + c) * o * h,
                u = Math.sin(r + m) * (b + c) * o * i,
                w = -Math.cos(r + m) * (b + c) * o * i;
            if ("circle" == J[a].hands_style) k.fillStyle = J[a].hands_color, k.beginPath(), k.arc(Fa(J[a].x) + s, Ga(J[a].y) + t, c, 0, 2 * Math.PI), k.fill(), k.beginPath(), k.arc(Fa(J[a].x) - u, Ga(J[a].y) - w, c, 0, 2 * Math.PI), k.fill();
            else {
                var x = J[a].hands_shape;
                k.fillStyle = J[a].hands_color, k.translate(Fa(J[a].x) + s, Ga(J[a].y) + t), k.scale(c, c), k.rotate(q + Math.PI / 2), jb(k, x, [0, 0], !1), k.setTransform(1, 0, 0, 1, 0, 0), k.translate(Fa(J[a].x) - u, Ga(J[a].y) - w), k.scale(c, c), k.rotate(r + Math.PI / 2), jb(k, x, [0, 0], !1), k.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }

    function fc() {
        pa.transition_active && (pa.transition_progress++, pa.transition_progress == na ? (pa.current_color_id = pa.target_color_id, pa.transition_progress = 0, pa.transition_active = !1, pa.r = oa[pa.current_color_id][0], pa.g = oa[pa.current_color_id][1], pa.b = oa[pa.current_color_id][2]) : (pa.r += (oa[pa.target_color_id][0] - oa[pa.current_color_id][0]) / na, pa.g += (oa[pa.target_color_id][1] - oa[pa.current_color_id][1]) / na, pa.b += (oa[pa.target_color_id][2] - oa[pa.current_color_id][2]) / na))
    }

    function gc() {
        for (var a = 0; a < ha.length; a++) {
            var b = ha[a],
                c = J[b].r - Math.floor(50 * (Math.sin(p / 40) + 1)),
                d = J[b].g,
                e = J[b].b - Math.floor(50 * (Math.cos(p / 40) + 1));
            k.fillStyle = "rgb(" + c + "," + d + "," + e + ")", k.beginPath(), k.arc(Fa(J[b].x + Math.sin(p / J[b].random_movement_x_speed) / J[b].random_movement_x), Ga(J[b].y + Math.cos(p / J[b].random_movement_y_speed) / J[b].random_movement_y), 1 / 16 * v * (1 + Math.sin(p / J[b].random_size_change_speed) / 15), 0, 2 * Math.PI), k.fill()
        }
    }

    function hc() {
        var a = ga + 1;
        ha = [];
        for (var b = J[z].current_radius - 1 / 36, c = 0; c < N.length; c++) {
            var d = N[c];
            if (J[d].x < J[z].x + a && J[d].x > J[z].x - a && J[d].y < J[z].y + a && J[d].y > J[z].y - a && (ha.push(d), ia + 5 < p)) {
                var e = Math.sqrt(Math.pow(J[d].x - J[z].x, 2) + Math.pow(J[d].y - J[z].y, 2));
                e <= b && (g.emit("f", d), ia = p)
            }
        }
    }

    function ic() {
        for (var a = Math.floor(30 * Math.sin(p / 4)), b = 0; b < M.length; b++) {
            var c = M[b];
            if (J[c].active) {
                var d = J[c].current_radius * v,
                    e = J[c].current_hands_radius * v;
                J[c].spawn_animation && (d *= J[c].spawn_animation_progress / 20, e *= J[c].spawn_animation_progress / 20), J[c].leave && (d *= (20 - J[c].leave_animation_progress) / 20, e *= (20 - J[c].leave_animation_progress) / 20);
                var f = d;
                J[c].centipede_loss_animation && (d *= (20 - J[c].centipede_loss_animation_progress) / 20, e *= (20 - J[c].centipede_loss_animation_progress) / 20);
                var g = J[c].armor / 100,
                    h = "";
                0 == J[c].tier ? h = J[c].hit_animation ? "rgb(" + (220 - 8 * J[c].hit_animation_progress) + ", 0, 0)" : J[c].charging ? "rgb(" + (220 - a) + ", 0, 0)" : "rgb(220, 0, 0)" : 1 == J[c].tier ? h = J[c].hit_animation ? "rgb(" + (3 + 12 * J[c].hit_animation_progress) + ", 76, 196)" : J[c].charging ? "rgb(3, 76, " + (196 + a) + ")" : "rgb(3, 76, 196)" : 2 == J[c].tier && (h = J[c].hit_animation ? "rgb(" + (167 - 4 * J[c].hit_animation_progress) + ", 56, 155)" : J[c].charging ? "rgb(167, 56, " + (155 + a) + ")" : "rgb(167, 56, 155)");
                var i = "";
                if (i = g > 0 ? J[c].hit_animation ? "rgb(" + (136 - 6 * J[c].hit_animation_progress) + ", 64, 64)" : J[c].charging ? "rgb(" + (64 + a) + ", " + (64 + a) + ", " + (64 + a) + ")" : "rgb(64, 64, 64)" : h, 0 == J[c].monster_type) k.translate(Fa(J[c].x), Ga(J[c].y)), k.scale(d, d), J[c].charging ? k.rotate(p / 8) : k.rotate(p / 14), k.fillStyle = i, jb(k, sa, [0, 0], !0), k.setTransform(1, 0, 0, 1, 0, 0), g > 0 && (k.fillStyle = h, k.beginPath(), k.arc(Fa(J[c].x), Ga(J[c].y), d * (1 - g), 0, 2 * Math.PI), k.fill());
                else if (1 == J[c].monster_type) g > 0 && (k.fillStyle = i, k.beginPath(), k.arc(Fa(J[c].x), Ga(J[c].y), d, 0, 2 * Math.PI), k.fill()), k.fillStyle = h, k.beginPath(), k.arc(Fa(J[c].x), Ga(J[c].y), d * (1 - g), 0, 2 * Math.PI), k.fill(), ec(c, d);
                else if (2 == J[c].monster_type) {
                    for (var j = J[c].centipede_objects.length - 1; j >= 0; j--) k.translate(Fa(J[c].centipede_objects[j].x), Ga(J[c].centipede_objects[j].y)), k.scale(f, f), k.rotate(J[c].centipede_objects[j].rot), k.fillStyle = i, jb(k, ua, [0, 0], !0), k.setTransform(1, 0, 0, 1, 0, 0), g > 0 && (k.translate(Fa(J[c].centipede_objects[j].x), Ga(J[c].centipede_objects[j].y)), k.scale(f * (1 - g), f * (1 - g)), k.rotate(J[c].rot), k.fillStyle = h, jb(k, ua, [0, 0], !0), k.setTransform(1, 0, 0, 1, 0, 0));
                    k.translate(Fa(J[c].x), Ga(J[c].y)), k.scale(d, d), k.rotate(J[c].rot), k.fillStyle = i, jb(k, ua, [0, 0], !0), k.setTransform(1, 0, 0, 1, 0, 0), g > 0 && (k.translate(Fa(J[c].x), Ga(J[c].y)), k.scale(d * (1 - g), d * (1 - g)), k.rotate(J[c].rot), k.fillStyle = h, jb(k, ua, [0, 0], !0), k.setTransform(1, 0, 0, 1, 0, 0)), ec(c, d)
                }
                var l = J[c].hp / J[c].max_hp,
                    m = 2.35 * J[c].current_radius,
                    n = m * l,
                    o = J[c].x - m / 2,
                    q = J[c].y - 1.6 * J[c].current_radius;
                k.fillStyle = "rgba(255, 0, 0, 0.6)", k.fillRect(Fa(o), Ga(q), Math.floor(n * v), 6);
                for (var r = 0; r < J[c].text_animations.length; r++) {
                    k.font = "bold " + (x - 12 + J[c].text_animations[r].font_size) + "px Helvetica", k.fillStyle = "rgba(" + J[c].text_animations[r].color.r + "," + J[c].text_animations[r].color.g + "," + J[c].text_animations[r].color.b + "," + J[c].text_animations[r].color.a + ")";
                    var s = J[c].text_animations[r].progress * (J[c].text_animations[r].distance / (1 + J[c].current_radius));
                    lc(J[c].x, J[c].y - J[c].current_radius * (1.8 + s), J[c].text_animations[r].text)
                }
            }
        }
    }

    function jc() {
        for (var a = 0; a < M.length; a++) {
            var b = M[a];
            if (J[b].active) {
                J[b].last_move_data < 4 ? (J[b].v_x += J[b].const_v_x, J[b].v_y += J[b].const_v_y) : 4 == J[b].last_move_data && (J[b].v_x = (J[b].target_x - J[b].x) / 12, J[b].v_y = (J[b].target_y - J[b].y) / 12), J[b].x += J[b].v_x, J[b].y += J[b].v_y, J[b].rot += J[b].v_rot, J[b].rot < 0 ? J[b].rot += 2 * Math.PI : J[b].rot > 2 * Math.PI && (J[b].rot -= 2 * Math.PI), J[b].dist += Math.sqrt(Math.pow(J[b].v_x, 2) + Math.pow(J[b].v_y, 2)) / (1 + 2 * J[z].current_radius);
                for (var c = 0; c < J[b].centipede_objects.length; c++) {
                    if (0 == c) {
                        var d = Math.sqrt(Math.pow(J[b].x - J[b].centipede_objects[c].x, 2) + Math.pow(J[b].y - J[b].centipede_objects[c].y, 2)) - .4 * J[b].current_radius,
                            e = Math.atan2(J[b].centipede_objects[c].y - J[b].y, J[b].centipede_objects[c].x - J[b].x) - Math.PI / 2;
                        J[b].centipede_objects[c].x += Math.sin(e) * (d / 7), J[b].centipede_objects[c].y -= Math.cos(e) * (d / 7)
                    } else {
                        var d = Math.sqrt(Math.pow(J[b].centipede_objects[c - 1].x - J[b].centipede_objects[c].x, 2) + Math.pow(J[b].centipede_objects[c - 1].y - J[b].centipede_objects[c].y, 2)) - .4 * J[b].current_radius,
                            e = Math.atan2(J[b].centipede_objects[c].y - J[b].centipede_objects[c - 1].y, J[b].centipede_objects[c].x - J[b].centipede_objects[c - 1].x) - Math.PI / 2;
                        J[b].centipede_objects[c].x += Math.sin(e) * (d / 7), J[b].centipede_objects[c].y -= Math.cos(e) * (d / 7)
                    }
                    J[b].charging ? c % 2 == 0 ? J[b].centipede_objects[c].rot += .12 : J[b].centipede_objects[c].rot -= .12 : c % 2 == 0 ? J[b].centipede_objects[c].rot += .06 : J[b].centipede_objects[c].rot -= .06
                }
                if (J[b].attacking && (J[b].animation_ending ? (J[b].animation_progress -= 1, J[b].animation_progress == -1 && (J[b].animation_ending = !1, J[b].attacking = !1, J[b].animation_progress = 0)) : (J[b].animation_progress++, J[b].animation_progress == J[b].animation_speed && (J[b].animation_ending = !0))), J[b].new_hp != J[b].hp) {
                    var f = (J[b].new_hp - J[b].hp) / 4;
                    Math.abs(f) <= J[b].max_hp / 200 ? J[b].hp = J[b].new_hp : J[b].hp += f
                }
                if (J[b].hit_animation && (J[b].hit_animation_progress++, 12 == J[b].hit_animation_progress && (J[b].hit_animation = !1, J[b].hit_animation_progress = 0)), J[b].spawn_animation && (J[b].spawn_animation_progress++, 20 == J[b].spawn_animation_progress && (J[b].spawn_animation = !1, J[b].spawn_animation_progress = 0)), J[b].leave && (J[b].leave_animation_progress++, 20 == J[b].leave_animation_progress && Ta(b)), J[b].centipede_loss_animation && (J[b].centipede_loss_animation_progress++, 20 == J[b].centipede_loss_animation_progress && (J[b].centipede_loss_animation = !1, J[b].centipede_loss_animation_progress = 0, J[b].centipede_objects.length > 0))) {
                    var g = J[b].centipede_objects.length - J[b].centipede;
                    J[b].x = J[b].centipede_objects[g - 1].x, J[b].y = J[b].centipede_objects[g - 1].y, J[b].centipede_objects.splice(0, g), J[b].hands_fade_in_animation = !0, J[b].hands_fade_in_animation_progress = 0
                }
                J[b].hands_fade_in_animation && (J[b].hands_fade_in_animation_progress++, 10 == J[b].hands_fade_in_animation_progress && (J[b].hands_fade_in_animation = !1, J[b].hands_fade_in_animation_progress = 0));
                for (var h = [], i = 0; i < J[b].text_animations.length; i++) J[b].text_animations[i].progress++, J[b].text_animations[i].color.a = Math.sin(J[b].text_animations[i].progress / J[b].text_animations[i].duration * Math.PI) * ((20 - J[b].leave_animation_progress) / 20), J[b].text_animations[i].progress <= J[b].text_animations[i].duration && h.push(J[b].text_animations[i]);
                J[b].text_animations = h
            }
        }
    }

    function kc() {
        if (0 == xa) {
            var a = R[J[z].map_level].y_start,
                b = R[J[z].map_level].y_end,
                c = R[J[z].map_level].x_end;
            1 == J[z].map_level ? J[z].x < 0 && (J[z].x = 0, J[z].v_x = 0) : J[z].x < R[J[z].map_level].x_start && (J[z].x = R[J[z].map_level].x_start, J[z].v_x = 0), J[z].y < a && (J[z].y = a, J[z].v_y = 0), J[z].y > b && (J[z].y = b, J[z].v_y = 0), J[z].x > c && !ja && (ka + 60 < p && (ka = p, Jb("You need to slay at least 1 monster to enter next level!")), J[z].x = c)
        } else if (1 == xa) {
            var d = 0,
                a = 0,
                b = Aa,
                c = za;
            J[z].y < a && (J[z].y = a, J[z].v_y = 0), J[z].y > b && (J[z].y = b, J[z].v_y = 0), J[z].x < d && (J[z].x = d, J[z].v_x = 0), J[z].x > c && (J[z].x = c, J[z].v_x = 0)
        }
    }

    function lc(a, b, c) {
        k.textAlign = "center", k.fillText(c, Fa(a), Ga(b))
    }

    function mc() {
        k.fillStyle = "black";
        for (var a = 0; a < L.length; a++) {
            var b = L[a];
            b != z && J[b].active && (k.font = "bold " + 26 / (J[z].current_radius / J[b].current_radius + .5) + "px Helvetica", lc(J[b].x, J[b].y - 1.88 * J[b].current_radius, J[b].nick))
        }
    }

    function nc() {
        for (var a = 0; a < L.length; a++) {
            var b = L[a];
            if (b != z && J[b].active) {
                var c = J[b].armor,
                    d = J[b].current_radius * v;
                if (J[b].spawn_animation && (d *= J[b].spawn_animation_progress / 20), J[b].leave && (d *= (20 - J[b].leave_animation_progress) / 20), J[b].spawn_protection_animation_progress > 0)
                    for (var e = .2 * (J[b].spawn_protection_animation_progress / 30), f = 0; f < 12; f++) {
                        var g = f / 12 * 2 * Math.PI + p / 19,
                            h = Math.sin(g) * (3 * d),
                            i = -Math.cos(g) * (3 * d);
                        k.fillStyle = "rgba(0, 160, 0, 0.35)", k.beginPath(), k.arc(Fa(J[b].x) + h, Ga(J[b].y) + i, e, 0, 2 * Math.PI), k.fill()
                    }
                if (c > 0 && (k.fillStyle = Z, k.beginPath(), k.arc(Fa(J[b].x), Ga(J[b].y), d, 0, 2 * Math.PI), k.fill()), k.fillStyle = _, k.beginPath(), k.arc(Fa(J[b].x), Ga(J[b].y), d * ((100 - c) / 100), 0, 2 * Math.PI), k.fill(), J[b].hit_animation) {
                    var j = J[b].hit_animation_progress / 12;
                    k.fillStyle = "rgba(255, 0, 0, " + (.5 - j / 2) + ")", k.beginPath(), k.arc(Fa(J[b].x), Ga(J[b].y), d, 0, 2 * Math.PI), k.fill()
                }
                dc(b, d), ec(b, d);
                var l = J[b].hp / J[b].max_hp,
                    m = 2.35 * J[b].current_radius,
                    n = m * l,
                    o = J[b].x - m / 2,
                    q = J[b].y - 1.6 * J[b].current_radius;
                k.fillStyle = "rgba(255, 0, 0, 0.6)", k.fillRect(Fa(o), Ga(q), Math.floor(n * v), 6);
                for (var r = 0; r < J[b].text_animations.length; r++) {
                    k.font = "bold " + (x - 12 + J[b].text_animations[r].font_size) + "px Helvetica", k.fillStyle = "rgba(" + J[b].text_animations[r].color.r + "," + J[b].text_animations[r].color.g + "," + J[b].text_animations[r].color.b + "," + J[b].text_animations[r].color.a + ")";
                    var s = J[b].text_animations[r].progress * (J[b].text_animations[r].distance / (1 + J[b].current_radius));
                    lc(J[b].x, J[b].y - J[b].current_radius * (2.24 + s), J[b].text_animations[r].text)
                }
            }
        }
    }

    function oc() {
        for (var a = 0; a < L.length; a++) {
            var b = L[a];
            if (J[b].active) {
                if (b != z && (J[b].x += J[b].v_x, J[b].y += J[b].v_y, J[b].rot += J[b].v_rot), J[b].dist += Math.sqrt(Math.pow(J[b].v_x, 2) + Math.pow(J[b].v_y, 2)) / (1 + 2 * J[z].current_radius), J[b].attacking ? J[b].animation_ending ? (J[b].animation_progress -= 1, J[b].animation_progress == -1 && (J[b].animation_ending = !1, J[b].attacking = !1, J[b].animation_progress = 0)) : (J[b].animation_progress++, J[b].animation_progress == J[b].animation_speed && (J[b].animation_ending = !0)) : J[b].blocking && (J[b].animation_ending ? (J[b].animation_progress--, J[b].animation_progress == -1 && (J[b].animation_ending = !1, J[b].blocking = !1, J[b].animation_progress = 0)) : J[b].animation_progress < J[b].animation_speed && J[b].animation_progress++), J[b].new_hp != J[b].hp) {
                    var c = (J[b].new_hp - J[b].hp) / 4;
                    Math.abs(c) <= J[b].max_hp / 200 ? J[b].hp = J[b].new_hp : J[b].hp += c
                }
                if (J[b].hit_animation && (J[b].hit_animation_progress++, 12 == J[b].hit_animation_progress && (J[b].hit_animation = !1, J[b].hit_animation_progress = 0)), J[b].spawn_animation && (J[b].spawn_animation_progress++, 20 == J[b].spawn_animation_progress && (J[b].spawn_animation = !1, J[b].spawn_animation_progress = 0)), J[b].leave) J[b].leave_animation_progress++, 20 == J[b].leave_animation_progress && Ka(b);
                else {
                    if (J[b].radius_animation) {
                        var d = J[b].current_radius + (J[b].radius_animation_new_radius - J[b].current_radius) / 30;
                        Ma(b, d), J[b].radius_animation_progress++, 120 == J[b].radius_animation_progress && (Ma(b, J[b].radius_animation_new_radius), J[b].radius_animation = !1)
                    }
                    J[b].hands_radius_animation && (J[b].current_hands_radius = J[b].current_hands_radius + (J[b].hands_radius_animation_new_radius - J[b].current_hands_radius) / 30, J[b].hands_radius_animation_progress++, 120 == J[b].hands_radius_animation_progress && (J[b].current_hands_radius = J[b].hands_radius_animation_new_radius, J[b].hands_radius_animation = !1))
                }
                for (var e = [], f = 0; f < J[b].text_animations.length; f++) J[b].text_animations[f].progress++, J[b].text_animations[f].color.a = Math.sin(J[b].text_animations[f].progress / J[b].text_animations[f].duration * Math.PI) * ((20 - J[b].leave_animation_progress) / 20), J[b].text_animations[f].progress <= J[b].text_animations[f].duration && e.push(J[b].text_animations[f]);
                J[b].text_animations = e, J[b].spawn_protection_animation && (J[b].spawn_protection_ticks > 0 ? (J[b].spawn_protection_animation_progress++, J[b].spawn_protection_animation_progress >= 30 && (J[b].spawn_protection_animation_progress = 30, J[b].spawn_protection_animation = !1)) : (J[b].spawn_protection_animation_progress--, J[b].spawn_protection_animation_progress <= 0 && (J[b].spawn_protection_animation_progress = 0, J[b].spawn_protection_animation = !1)))
            }
        }
    }

    function pc() {
        k.translate(-V * v, -W * v);
        var a = J[z].armor,
            b = J[z].current_radius * v;
        if (J[z].spawn_protection_animation_progress > 0)
            for (var c = b / 5 * (J[z].spawn_protection_animation_progress / 30), d = 0; d < 12; d++) {
                var e = d / 12 * 2 * Math.PI + p / 19,
                    f = Math.sin(e) * (3 * b),
                    g = -Math.cos(e) * (3 * b);
                k.fillStyle = "rgba(0, 160, 0, 0.35)", k.beginPath(), k.arc(Math.floor(j.width / 2) + f, Math.floor(j.height / 2) + g, c, 0, 2 * Math.PI), k.fill()
            }
        a > 0 && (k.fillStyle = Z, k.beginPath(), k.arc(Math.floor(j.width / 2), Math.floor(j.height / 2), b, 0, 2 * Math.PI), k.fill()), k.fillStyle = _, k.beginPath(), k.arc(Math.floor(j.width / 2), Math.floor(j.height / 2), b * ((100 - a) / 100), 0, 2 * Math.PI), k.fill();
        var h = .3 * b,
            i = 32 * (Math.PI / 180),
            l = .5 * h,
            m = Math.sin(D - i) * b * .6,
            n = -Math.cos(D - i) * b * .6,
            o = Math.sin(D + i) * b * .6,
            q = -Math.cos(D + i) * b * .6,
            r = 1.15 * m + Math.cos(D) * b * .09,
            s = 1.15 * n + Math.sin(D) * b * .09,
            t = 1.15 * o - Math.cos(D) * b * .09,
            u = 1.15 * q - Math.sin(D) * b * .09,
            w = 1 - .7 * Math.sin(J[z].hit_animation_progress / 12 * Math.PI),
            y = D + Math.PI / 2 + Math.PI * (1 - w),
            A = y + 2 * Math.PI * w;
        if (k.fillStyle = "rgb(255, 255, 255)", k.beginPath(), k.arc(Math.floor(j.width / 2) + m, Math.floor(j.height / 2) + n, h, y, A), k.fill(), k.beginPath(), k.arc(Math.floor(j.width / 2) + o, Math.floor(j.height / 2) + q, h, y, A), k.fill(), k.fillStyle = Z, k.beginPath(), k.arc(Math.floor(j.width / 2) + r, Math.floor(j.height / 2) + s, l, y, A), k.fill(), k.beginPath(), k.arc(Math.floor(j.width / 2) + t, Math.floor(j.height / 2) + u, l, y, A), k.fill(), J[z].hit_animation) {
            var B = J[z].hit_animation_progress / 12;
            k.fillStyle = "rgba(255, 0, 0, " + (.5 - B / 2) + ")", k.beginPath(), k.arc(Math.floor(j.width / 2), Math.floor(j.height / 2), b, 0, 2 * Math.PI), k.fill()
        }
        var C = 20,
            E = 16,
            F = 24,
            G = 1,
            H = 1,
            I = 1,
            K = 1,
            L = 0,
            M = 0,
            N = J[z].animation_progress / J[z].animation_speed,
            O = J[z].current_hands_radius * v,
            P = 1.1,
            Q = Math.sin(J[z].dist * E) * F * (1 - J[z].hands_fix_animation_progress / 10);
        J[z].attacking ? "left" == J[z].attacking_hand ? (G = 1 + .7 * N, H = 1 + .7 * N, L = 1.6 * N) : (I = 1 + .7 * N, K = 1 + .7 * N, M = -(1.6 * N)) : J[z].blocking && (C = 20 + 49 * N);
        var R = D - (90 + Q - C) * (Math.PI / 180),
            S = D - (90 + Q + C) * (Math.PI / 180),
            T = Math.sin(R + L) * (b + O) * P * G,
            U = -Math.cos(R + L) * (b + O) * P * H,
            X = Math.sin(S + M) * (b + O) * P * I,
            Y = -Math.cos(S + M) * (b + O) * P * I;
        k.fillStyle = J[z].hands_color, k.beginPath(), k.arc(Math.floor(j.width / 2) + T, Math.floor(j.height / 2) + U, O, 0, 2 * Math.PI), k.fill(), k.beginPath(), k.arc(Math.floor(j.width / 2) - X, Math.floor(j.height / 2) - Y, O, 0, 2 * Math.PI), k.fill();
        var $ = J[z].hp / J[z].max_hp,
            aa = 2.35 * J[z].current_radius,
            ba = aa * $,
            ca = j.width / 2 - aa * v / 2,
            da = j.height / 2 - 1.6 * J[z].current_radius * v,
            ea = J[z].energy / J[z].max_energy,
            fa = aa * ea,
            ga = j.width / 2 - aa * v / 2,
            ha = j.height / 2 - 1.6 * J[z].current_radius * v;
        k.fillStyle = "rgba(255, 0, 0, 0.6)", k.fillRect(ca, da, Math.floor(ba * v), 6), k.fillStyle = "rgba(0, 0, 255, 0.6)", k.fillRect(ga, ha + 6, Math.floor(fa * v), 4), k.setTransform(1, 0, 0, 1, 0, 0), k.font = "bold " + 18 * (1 + J[z].current_radius / 10) + "px Helvetica", k.fillStyle = "black", lc(J[z].x, J[z].y - 1.88 * J[z].current_radius, J[z].nick);
        for (var ia = 0; ia < J[z].text_animations.length; ia++) {
            k.font = "bold " + (x - 12 + J[z].text_animations[ia].font_size) + "px Helvetica", k.fillStyle = "rgba(" + J[z].text_animations[ia].color.r + "," + J[z].text_animations[ia].color.g + "," + J[z].text_animations[ia].color.b + "," + J[z].text_animations[ia].color.a + ")";
            var ja = J[z].text_animations[ia].progress * (J[z].text_animations[ia].distance / (1 + J[z].current_radius));
            lc(J[z].x, J[z].y - J[z].current_radius * (2.24 + ja), J[z].text_animations[ia].text)
        }
    }

    function qc() {
        var a = 60 / s,
            b = J[z].speed;
        (J[z].attacking || J[z].blocking) && (b *= .7);
        var c = b / 2 * a,
            d = c / 1.414,
            e = b / (10 / a);
        if (F.up || F.down ? F.left && J[z].v_x > -d ? J[z].v_x -= e : F.right && J[z].v_x < d && (J[z].v_x += e) : F.left && J[z].v_x > -c ? J[z].v_x -= e : F.right && J[z].v_x < c && (J[z].v_x += e), F.left || F.right ? F.up && J[z].v_y > -d ? J[z].v_y -= e : F.down && J[z].v_y < d && (J[z].v_y += e) : F.up && J[z].v_y > -c ? J[z].v_y -= e : F.down && J[z].v_y < c && (J[z].v_y += e), J[z].v_x *= .85, J[z].v_y *= .85, Math.abs(J[z].v_x) < .001 && (J[z].v_x = 0), Math.abs(J[z].v_y) < .001 && (J[z].v_y = 0), J[z].x += J[z].v_x, J[z].y += J[z].v_y, kc(), J[z].new_energy != J[z].energy) {
            var f = (J[z].new_energy - J[z].energy) / 4;
            Math.abs(f) <= 1 ? J[z].energy = J[z].new_energy : J[z].energy += f
        }
    }

    function rc() {
        k.strokeStyle = "rgba(0, 0, 0, 0.14)";
        var a = 1,
            b = Math.ceil(j.width / v) + 1,
            c = Math.ceil(j.height / v) + 1,
            d = (j.width / 2 - (J[z].x + V) * v) % v,
            e = (j.height / 2 - (J[z].y + W) * v) % v;
        k.lineWidth = a, k.beginPath();
        for (var f = 0; f < b; f++) k.moveTo(f * v + .5 + d, .5), k.lineTo(f * v + .5 + d, j.height + .5);
        for (var g = 0; g < c; g++) k.moveTo(.5, g * v + .5 + e), k.lineTo(j.width + .5, g * v + .5 + e);
        k.stroke()
    }

    function sc() {
        if (k.fillStyle = "rgb(64, 64, 64)", k.lineWidth = 50, 0 == xa) {
            for (var a = J[z].map_level - 1; a <= J[z].map_level + 1; a++)
                if (0 != a) {
                    var b = P + (a - 1) * Q,
                        c = P * a + (a - 1) * a / 2 * Q - b;
                    1 == a && k.fillRect(Fa(0), Ga(-S / 2), -S * v, S * v), k.fillRect(Fa(c), Ga(-(a - 1) * Q / 2), b * v + 1, -S * v), k.fillRect(Fa(c), Ga(b - (a - 1) * Q / 2), b * v + 1, S * v)
                }
        } else 1 == xa && (k.fillRect(Fa(0), Ga(-S / 2), -S * v, S * v), k.fillRect(Fa(za), Ga(-S / 2), S * v, S * v), k.fillRect(Fa(0), Ga(0), za * v + 1, -S * v), k.fillRect(Fa(0), Ga(Aa), za * v + 1, S * v))
    }

    function tc() {
        var a = Math.floor(j.width / 2) - V * v,
            b = Math.floor(j.height / 2) - W * v,
            c = Math.sin(D) * (Math.abs(B - a) / j.width) * .75,
            d = -Math.cos(D) * (Math.abs(C - b) / j.height) * .75,
            e = (R[J[z].map_level].x_end - J[z].x) * v;
        if (e < j.width / 2) c = -(j.width / 2 - e + 3) / v;
        else if (J[z].map_level > 1) {
            var f = (J[z].x - R[J[z].map_level].x_start) * v;
            f < j.width / 2 && (c = (j.width / 2 - f + 3) / v)
        }
        X = (c - V) / 15, Y = (d - W) / 15, V += X, W += Y
    }

    function uc() {
        k.fillStyle = "rgb(" + Math.floor(pa.r) + ", " + Math.floor(pa.g) + ", " + Math.floor(pa.b) + ")", k.fillRect(0, 0, j.width, j.height), rc(), sc(), gc(), ic(), nc(), mc(), pc()
    }

    function vc() {
        p % 2 == 0 && E && (g.emit("r", D), E = !1), fc(), qc(), tc(), oc(), jc(), hc(), ab()
    }

    function xc() {
        requestAnimationFrame(xc), p++;
        var a = window.performance.now(),
            b = a - wc;
        wc = a, q = 1e3 / b, r += q, p % 60 == 0 && (s = r / 60, $("#fps").text("FPS: " + s.toFixed(1)), r = 0), h ? (vc(), uc(), cc()) : $b();
        var c = window.performance.now() - wc;
        $("#loop_time").text("LOOP TIME: " + c.toFixed(1))
    }

    function yc() {
        w = t * x, v = u * w
    }

    function zc() {
        var a = $(window).width(),
            b = $(window).height(),
            c = a / b;
        $("#canvas").css("width", "100%"), $("#height").css("width", "100%"), j.width = a, j.height = b, t = c >= 16 / 9 ? a < 1024 ? 1024 / 1920 : $(window).width() / 1920 : b >= 576 ? 16 * $(window).height() / 9 / 1920 : 1024 / 1920, yc()
    }

    function Ac() {
        R = [];
        for (var a = 1; a < 1e4; a++) {
            var b = P + (a - 1) * Q,
                c = P * a + (a - 1) * a / 2 * Q - b,
                d = c,
                e = d + b,
                f = -(a - 1) * (Q / 2),
                g = f + b;
            R[a] = {
                x_start: d,
                x_end: e,
                y_start: f,
                y_end: g,
                size: b
            }
        }
    }

    function Bc() {
        sa = ib(15, 1), ta = kb(3, !1), ua = kb(9, !1);
        var a = !0;
        window.location.href.indexOf("slain.io") == -1 && (a = !1), zc(), zb(), lb(), wb(), xb(), xc(), ma = setInterval(lb, 2e3)
    }
    var a = {};
    a.SKILL_TYPE = {
        DEFENSIVE: 0,
        OFFENSIVE: 1,
        SPECIAL: 2
    }, a.skills = {
        0: {
            name: "Maximum Health",
            type: a.SKILL_TYPE.DEFENSIVE,
            growth_value: 25,
            limit: 65536,
            description: "- Increases your maximum health, health, size, vision area and attack range.<br><br>- Each point increases your maximum health and health by 25.",
            getFormattedVal: function(a) {
                return 100 + this.growth_value * a
            }
        },
        1: {
            name: "Armor",
            type: a.SKILL_TYPE.DEFENSIVE,
            max_percentage: 99,
            growth_speed: 17,
            limit: 65536,
            description: "- Lowers damage taken by the percentage.",
            getFormattedVal: function(a) {
                return (0 + Gb(a, this.max_percentage, this.growth_speed)).toFixed(2) + "%"
            }
        },
        2: {
            name: "Health Regeneration",
            type: a.SKILL_TYPE.DEFENSIVE,
            max_percentage: 20,
            growth_speed: 48,
            limit: 65536,
            description: "- Increases your health regeneration percentage.<br><br>- Default Health Regeneration is 10%. This skill allows to increase the percentage.",
            getFormattedVal: function(a) {
                return (10 + Gb(a, this.max_percentage, this.growth_speed)).toFixed(2) + "%"
            }
        },
        3: {
            name: "Attack Damage",
            type: a.SKILL_TYPE.OFFENSIVE,
            growth_value: 2,
            limit: 65536,
            description: "- Increases your attack damage, size of your hands and attack range.<br><br>- Each point increases your damage by 2.",
            getFormattedVal: function(a) {
                return 15 + this.growth_value * a
            }
        },
        4: {
            name: "Armor Penetration",
            type: a.SKILL_TYPE.OFFENSIVE,
            max_percentage: 99,
            growth_speed: 9,
            limit: 65536,
            description: "- Lowers enemy's armor.<br><br>- Example: If enemy has 50% armor and you have 45% armor penetration, this skill will lower his armor to 5% (50 - 45).<br><br>- Enemy's armor can't get lower than 0%.",
            getFormattedVal: function(a) {
                return (0 + Gb(a, this.max_percentage, this.growth_speed)).toFixed(2) + "%"
            }
        },
        5: {
            name: "Attack Speed",
            type: a.SKILL_TYPE.OFFENSIVE,
            limit: 7,
            description: "- Increases your attack speed.<br><br>- This skill is limited: maximum 7 points.",
            getFormattedVal: function(a) {
                return (13 / 30 - a / 30).toFixed(2) + "s"
            }
        },
        6: {
            name: "Movement Speed",
            type: a.SKILL_TYPE.SPECIAL,
            limit: 20,
            growth_value: .003,
            description: "- Increases your movement speed.<br><br>- This skill is limited: maximum 20 points.",
            getFormattedVal: function(a) {
                return (100 * (.04 + a * this.growth_value)).toFixed(2)
            }
        },
        7: {
            name: "Life Stealing",
            type: a.SKILL_TYPE.SPECIAL,
            max_percentage: 99,
            growth_speed: 6,
            limit: 65536,
            description: "- You get healed for a percentage of dealt damage.<br><br>",
            getFormattedVal: function(a) {
                return (0 + Gb(a, this.max_percentage, this.growth_speed)).toFixed(2) + "%"
            }
        },
        8: {
            name: "Damage Reflection",
            type: a.SKILL_TYPE.SPECIAL,
            max_percentage: 99,
            growth_speed: 7,
            limit: 65536,
            description: "- When enemy hits you, percentage of the damage that he dealt is reflected back to him.",
            getFormattedVal: function(a) {
                return (0 + Gb(a, this.max_percentage, this.growth_speed)).toFixed(2) + "%"
            }
        },
        9: {
            name: "Energy Pool",
            type: a.SKILL_TYPE.SPECIAL,
            growth_value: 10,
            limit: 40,
            description: "- Increases maximum amount of your energy by 10 which allows you to perform additional attack without resting.<br><br>- Adding point to this attribute also instantly restores 10 energy.<br><br>- This skill is limited: maximum 40 points.",
            getFormattedVal: function(a) {
                return 100 + this.growth_value * a
            }
        },
        10: {
            name: "Energy Regeneration",
            type: a.SKILL_TYPE.SPECIAL,
            growth_value: 2.5,
            limit: 32,
            description: "- Restores a small portion of your energy every 3 seconds.<br><br>- Each point increases energy regeneration by 2.5.<br><br>- This skill is limited: maximum 32 points.",
            getFormattedVal: function(a) {
                return 20 + this.growth_value * a
            }
        },
        11: {
            name: "Blocking",
            type: a.SKILL_TYPE.DEFENSIVE,
            max_percentage: 40,
            growth_speed: 27,
            limit: 65536,
            description: "- Increases effectiveness of your blocking.<br><br>- Default blocking effectiveness is 50%. This skill allows to increase the percentage.",
            getFormattedVal: function(a) {
                return (50 + Gb(a, this.max_percentage, this.growth_speed)).toFixed(2) + "%"
            }
        },
        12: {
            name: "Critical Chance",
            type: a.SKILL_TYPE.OFFENSIVE,
            growth_value: 5,
            limit: 20,
            description: "- Increases chance of your attack being a <u>Critical Attack</u>.<br><br>- <u>Critical Attack</u> by default deals 200% damage. This percentage can be increased by picking <u>Critical Power</u> skill.<br><br>- Each point adds 5% Critical Chance.<br><br>- This skill is limited: maximum 20 points.",
            getFormattedVal: function(a) {
                return 0 + this.growth_value * a + "%"
            }
        },
        13: {
            name: "Critical Power",
            type: a.SKILL_TYPE.OFFENSIVE,
            growth_value: 5,
            limit: 20,
            description: "- Increases power of <u>Critical Attack</u>.<br><br>- <u>Critical Attack</u> by default deals 200% damage. This percentage can be increased by picking this skill.<br><br>- Each point adds 5% Critical Power.<br><br>- This skill is limited: maximum 20 points.",
            getFormattedVal: function(a) {
                return 200 + this.growth_value * a + "%"
            }
        },
        14: {
            name: "Transformation: Healer",
            type: a.SKILL_TYPE.SPECIAL,
            growth_value: 1,
            limit: 25,
            description: "- Your attacks heal players. Other players can't damage you.<br><br>- You get 75% less experience for slaying monsters, instead you get bonus experience for collecting gems and healing other players.<br><br>- You can enter next areas without slaying a monster.<br><br>- This skill is limited: maximum 25 points.",
            getFormattedVal: function(a) {
                return 5 + this.growth_value * a + " hp"
            }
        }
    };
    for (var b = "1.16", c = {}, d = null, e = null, g = null, h = !1, i = !1, j = document.getElementById("canvas"), k = j.getContext("2d"), l = document.getElementById("minimap"), m = l.getContext("2d"), n = null, o = !1, p = 0, q = 60, r = 60, s = 60, t = 0, u = 15, v = 0, w = 0, x = 17, z = "", B = 0, C = 0, D = 0, E = !1, F = {
            up: !1,
            down: !1,
            left: !1,
            right: !1,
            attack: !1,
            block: !1
        }, G = {}, H = [87, 83, 65, 68, 38, 40, 37, 39, 88], I = [1, 3], J = {}, K = [], L = [], M = [], N = [], O = {}, P = 20, Q = 4, R = [], S = 5e4, T = 5e3, V = 0, W = 0, X = 0, Y = 0, Z = "rgb(64, 64, 64)", _ = "rgb(150, 150, 150)", aa = !1, ba = {
            points: 0,
            lvl: 0
        }, ea = !0, ga = 0, ha = [], ia = 0, ja = !1, ka = 0, ma = null, na = 90, oa = {
            1: [196, 246, 220],
            2: [246, 237, 237],
            3: [210, 223, 246],
            4: [183, 205, 246],
            5: [234, 221, 246],
            higher: [221, 194, 246]
        }, pa = {
            current_color_id: 1,
            target_color_id: 2,
            transition_active: !1,
            transition_progress: 0,
            r: oa[1][0],
            g: oa[1][1],
            b: oa[1][2]
        }, qa = !1, ra = null, sa = null, ta = null, ua = null, va = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null,
            6: null,
            7: null,
            8: null,
            9: null
        }, wa = 1, xa = 0, ya = 0, za = 0, Aa = 0, Ba = {}, Ca = "", cb = 0, db = ["ms", "moz", "webkit", "o"], eb = 0; eb < db.length && !window.requestAnimationFrame; ++eb) window.requestAnimationFrame = window[db[eb] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[db[eb] + "CancelAnimationFrame"] || window[db[eb] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(a, b) {
        var c = (new Date).getTime(),
            d = Math.max(0, 16 - (c - cb)),
            e = window.setTimeout(function() {
                a(c + d)
            }, d);
        return cb = c + d, e
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    }), window.ondragstart = function() {
        return !1
    }, $(window).mousedown(function(a) {
        $("#select_server_container").removeClass("server-list-active")
    }), $("#select_server_head").mousedown(function(a) {
        $("#select_server_container").toggleClass("server-list-active"), a.stopPropagation()
    }), $("#select_server_body").mousedown(function(a) {
        a.stopPropagation()
    }), $("#summary_continue").click(function() {
        $("#summary_container").fadeOut(300), $("#main_menu_container").fadeIn(300), $("#ads").fadeIn(300), xb()
    }), $("#start").click(function() {
        if (i) return void ub("success", "Connecting...");
        if (null != d) {
            var a = d;
            if ("category" == d && (a = ob()), null == a) return void ub("error", "Couldn't find a server. Please, try again.");
            if (0 == c[a].status) return void ub("error", "Server is offline.");
            if (Number(c[a].players) >= Number(c[a].max_players)) return void ub("error", "Server is full.");
            var b = $("#nick").val();
            b = b.trim(), $("#nick").val(b);
            var e = "check_nick",
                f = {
                    nick: b
                };
            $.post("api/api.php", {
                action: e,
                data: f
            }, function(b) {
                if ("1" == b) {
                    var c = $("#nick").val();
                    if (c = c.trim(), c.length > 20) return;
                    var d = "";
                    null != n && o && (d = n.account_key);
                    for (var e = [], f = 1; f <= 9; f++) e.push(va[f].id);
                    Ob(a, c, d, e)
                } else ub("error", "This nickname is taken. Try another one!")
            })
        }
    }), $("#btn_log_in").click(function() {
        $("#menu_not_logged_in_main").hide(), $("#menu_not_logged_in_log_in").show()
    }), $("#btn_sign_up").click(function() {
        $("#menu_not_logged_in_main").hide(), $("#menu_not_logged_in_sign_up").show()
    }), $("#btn_menu_not_logged_in_log_in_back").click(function() {
        $("#menu_not_logged_in_log_in").hide(), $("#menu_not_logged_in_main").show()
    }), $("#btn_menu_not_logged_in_sign_up_back").click(function() {
        $("#menu_not_logged_in_sign_up").hide(), $("#menu_not_logged_in_main").show()
    }), $("#btn_menu_not_logged_in_sign_up_next").click(function() {
        var a = $("#sign_up_nick").val();
        a = a.trim(), $("#sign_up_nick").val(a);
        var b = a.length;
        if (b < 3 || b > 20) return void ub("error", "Nick should be 3-20 characters long.");
        var c = "is_nick_free",
            d = {
                nick: a
            };
        $.post("api/api.php", {
            action: c,
            data: d
        }, function(a) {
            return "0" == a ? void ub("error", "This nickname is taken. ;-( Try another one!") : ($("#menu_not_logged_in_sign_up").hide(), void $("#menu_not_logged_in_sign_up_2").show())
        })
    }), $("#btn_menu_not_logged_in_sign_up_2_back").click(function() {
        $("#menu_not_logged_in_sign_up_2").hide(), $("#menu_not_logged_in_sign_up").show()
    }), $("#btn_sign_up_password").click(function() {
        $("#menu_not_logged_in_sign_up_2").hide(), $("#menu_not_logged_in_sign_up_2_ep").show()
    }), $("#btn_menu_not_logged_in_sign_up_2_ep_back").click(function() {
        $("#menu_not_logged_in_sign_up_2_ep").hide(), $("#menu_not_logged_in_sign_up_2").show()
    }), $("#btn_menu_not_logged_in_log_in_ep_back").click(function() {
        $("#menu_not_logged_in_log_in_ep").hide(), $("#menu_not_logged_in_log_in").show()
    }), $("#btn_log_in_password").click(function() {
        $("#menu_not_logged_in_log_in").hide(), $("#menu_not_logged_in_log_in_ep").show()
    }), $("#btn_menu_not_logged_in_sign_up_2_ep_next").click(function() {
        var a = $("#sign_up_email").val(),
            b = $("#sign_up_password").val(),
            c = $("#sign_up_confirm_password").val(),
            d = $("#sign_up_nick").val();
        if ($("#sign_up_email").val(a.trim()), !vb(a)) return void ub("error", "This email is invalid.");
        var e = b.length;
        if (e < 5 || e > 32) return void ub("error", "Password should be 5-32 characters long.");
        if (b != c) return void ub("error", "Passwords are not the same.");
        var f = grecaptcha.getResponse();
        if (0 == f.length) return void ub("error", "Please, complete reCAPTCHA.");
        var g = "register_default",
            h = {
                nick: d,
                email: a,
                password: b,
                recaptcha_response: f
            };
        $.post("api/api.php", {
            action: g,
            data: h
        }, function(a) {
            "3" == a ? (grecaptcha.reset(), ub("error", "This email is already taken.")) : "2" == a ? (grecaptcha.reset(), ub("error", "Please, complete the reCAPTCHA again.")) : "0" == a ? (grecaptcha.reset(), ub("error", "We couldn't sign you up. Please, try again later. ;-(")) : "1" == a && (grecaptcha.reset(), ub("success", "Have fun!"), wb(), xb())
        })
    }), $("#btn_menu_not_logged_in_log_in_ep_next").click(function() {
        var a = $("#log_in_email").val(),
            b = $("#log_in_password").val();
        if ($("#log_in_email").val(a.trim()), !vb(a)) return void ub("error", "This email is invalid.");
        var c = b.length;
        if (c < 5 || c > 32) return void ub("error", "Password should be 5-32 characters long.");
        var d = "login_default",
            e = {
                email: a,
                password: b
            };
        $.post("api/api.php", {
            action: d,
            data: e
        }, function(a) {
            "0" == a || "" == a ? ub("error", "Incorrect combination of Email and Password.") : "1" == a && (ub("success", "Have fun!"), wb())
        })
    }), $("#btn_menu_logged_in_log_out").click(function() {
        var a = "log_out",
            b = {};
        $.post("api/api.php", {
            action: a,
            data: b
        }, function(a) {
            o = !1, $(".menu-page").hide(), $("#menu_not_logged_in").show(), $("#menu_not_logged_in_main").show()
        })
    });
    var tb = null;
    $("#btn_ranking_points").click(function() {
        $("#ranking_highest_lvl").hide(), $("#ranking_points").show(), $(this).addClass("btn-active"), $("#btn_ranking_lvl").removeClass("btn-active")
    }), $("#btn_ranking_lvl").click(function() {
        $("#ranking_points").hide(), $("#ranking_highest_lvl").show(), $(this).addClass("btn-active"), $("#btn_ranking_points").removeClass("btn-active")
    }), $(".popup-window .close").click(function() {
        $(".popup-window").fadeOut(300), $("#main_menu_container").fadeIn(300), $("#slain_adslot_2").fadeIn(300)
    }), $("#footer_btn_how_to_play").click(function() {
        $(".popup-window").fadeOut(300), $("#main_menu_container").fadeOut(300), $("#how_to_play").fadeIn(300), $("#slain_adslot_2").fadeOut(300)
    }), $("#footer_btn_changelog").click(function() {
        $(".popup-window").fadeOut(300), $("#main_menu_container").fadeOut(300), $("#changelog").fadeIn(300), $("#slain_adslot_2").fadeOut(300)
    }), $("#options_button").click(function() {
        $(".popup-window").fadeOut(300), $("#main_menu_container").fadeOut(300), $("#options").fadeIn(300), $("#slain_adslot_2").fadeOut(300)
    }), $(".options-skill-edit").click(function() {
        var b = Number($(this).parent().attr("data-slot-id"));
        wa = b, b >= 1 && b <= 3 && ($("#options_change_skill .options-header").removeClass("options-header-defensive"), $("#options_change_skill .options-header").removeClass("options-header-offensive"), $("#options_change_skill .options-header").removeClass("options-header-special"), $("#options_change_skill .options-header").addClass("options-header-defensive").html("Replace <u>" + a.skills[va[b].id].name + "</u>"), Ab(a.SKILL_TYPE.DEFENSIVE)), b >= 4 && b <= 6 && ($("#options_change_skill .options-header").removeClass("options-header-defensive"), $("#options_change_skill .options-header").removeClass("options-header-offensive"), $("#options_change_skill .options-header").removeClass("options-header-special"), $("#options_change_skill .options-header").addClass("options-header-offensive").html("Replace <u>" + a.skills[va[b].id].name + "</u>"), Ab(a.SKILL_TYPE.OFFENSIVE)), b >= 7 && b <= 9 && ($("#options_change_skill .options-header").removeClass("options-header-defensive"), $("#options_change_skill .options-header").removeClass("options-header-offensive"), $("#options_change_skill .options-header").removeClass("options-header-special"), $("#options_change_skill .options-header").addClass("options-header-special").html("Replace <u>" + a.skills[va[b].id].name + "</u>"), Ab(a.SKILL_TYPE.SPECIAL)), $("#options").fadeOut(300), $("#options_change_skill").fadeIn(300)
    }), $("#options_change_skill .go-back").click(function(a) {
        $("#options_change_skill").fadeOut(300), $("#options").fadeIn(300)
    }), $(".options-skill").hover(function() {
        var b = Number($(this).attr("data-slot-id"));
        $("#options_skill_info .popup-content").html('<div class="options-skill-info-name">' + a.skills[va[b].id].name + '</div><div class="options-skill-info-shortcut">Shortcut Key: ' + b + '</div><div class="options-skill-info-description">' + a.skills[va[b].id].description), $("#options_skill_info").stop().fadeIn(100)
    }, function() {
        $("#options_skill_info").stop().fadeOut(100)
    }), $(".btn-game-mode").click(function() {
        var a = Number($(this).attr("data-gm"));
        $(".btn-game-mode").removeClass("btn-game-mode-active"), $(this).addClass("btn-game-mode-active"), a != ya && qb(a)
    }), $(".stats").hover(function() {
        var a = $(this).attr("data-id");
        ra = a, Eb(), $("#skill_info").stop().fadeIn(200)
    }, function() {
        ra = null, $("#skill_info").stop().fadeOut(200)
    }), $(".stats").mousedown(function(a) {
        $("#skill_menu").hasClass("stats-adding-on") && a.stopPropagation(a)
    }), $(".stats").click(function(b) {
        if ($("#skill_menu").hasClass("stats-adding-on") && !(J[z].available_stats_points <= 0)) {
            var c = Number($(this).attr("data-id")),
                d = va[c].id;
            va[c].points >= a.skills[d].limit || (g.emit("s", c), $("#skill_menu").removeClass("stats-adding-on"))
        }
    });
    var Ib = null,
        Kb = null,
        Wb = 0,
        Xb = 0,
        Yb = 0,
        Zb = 0,
        wc = window.performance.now();
    $(window).resize(function() {
        zc()
    }), $(window).keydown(function(a) {
        null != G[a.which] && 0 != G[a.which] || (G[a.which] = !0, Sb(a.which))
    }), $(window).keyup(function(a) {
        G[a.which] = !1, Tb(a.which)
    }), $(window).mousemove(function(a) {
        B = a.pageX, C = a.pageY;
        var b = Math.atan2(Math.floor(j.height / 2) - C - W * v, Math.floor(j.width / 2) - B - V * v) - Math.PI / 2;
        b != D && (E = !0, D = b)
    }), $(document).on({
        contextmenu: function(a) {
            a.preventDefault()
        },
        mousedown: function(a) {
            Ub(a.which)
        },
        mouseup: function(a) {
            Vb(a.which)
        }
    }), $(window).focus(function() {
        ea = !0
    }), $(window).blur(function() {
        ea = !1
    }), Bc()
});
